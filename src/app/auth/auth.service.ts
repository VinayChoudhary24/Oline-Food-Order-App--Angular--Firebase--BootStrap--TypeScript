import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

// This is the Response that we will get from FIREBASE after the SignUp/Login Request
// The Response Data for SignUp and Login is almost same, with the ONLY difference is the REGISTERED key which is the response for the Login
interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    // Add a ? with this key i.e making it Optional because it's present in Login and Not in SignUp ResponseData
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    // The HttpClient
    constructor( private http: HttpClient ) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmmW0q9rEh-BDoOXe80JUkqKZQ5KTxAgo', {
            email: email,
            password: password,
            returnSecureToken: true
        })
        // Errors are Handles Here
        .pipe(catchError( (errorRes) => {
            let errorMessage = 'An Unknown error occured!';
            if(!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage);
            }
             // For Different Types of errors we Use Switch Case
             switch(errorRes.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email exists already.'
                // case 'OPERATION_NOT_FOUND':
                //     errorMessage = 'This is Invalid.'
            }
            return throwError(errorMessage);
        }))
    }
    // Login Process
    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDmmW0q9rEh-BDoOXe80JUkqKZQ5KTxAgo', {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }

}