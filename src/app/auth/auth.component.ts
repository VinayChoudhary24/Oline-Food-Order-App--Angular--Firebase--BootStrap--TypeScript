import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})

export class AuthComponent {
    // To switch between the User
    isLoginMode = true;

    // Method to swith Modes
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    // This will Submit the Form
    onSubmit(form: NgForm) {
        console.log(form.value);
        form.reset();
    }
}