import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})

export class AuthComponent {
    // To switch between the User
    isLoginMode = true;

    // This is for the Loading-Spinner
    isLoading = false;

    // This is for the ERROR
    error: string = null;

    constructor( private authService: AuthService ) {}

    // Method to swith Modes
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    // This will Submit the Form
    onSubmit(form: NgForm) {
        // console.log(form.value);
        if(!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        // to show the Loading-Spinner Here
        this.isLoading = true;
        // 
        if(this.isLoginMode) {

        } else {
        // Subscribe the SignUp POST Request Here
        this.authService.signUp(email, password).subscribe( (resData) => {
            console.log(resData);
            this.isLoading = false;
        }, (errorMessage) => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });
        }

        form.reset();
    }
}