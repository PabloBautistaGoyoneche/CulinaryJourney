import { Component, } from '@angular/core';
import { LoginService } from '../../services/login-api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-main-page',
    templateUrl: './register.component.html'
})

export class RegisterPageComponent {

    constructor(
        private loginService: LoginService,
        private router: Router,
    ) {}

    register(username: string, email: string, password: string, confirmPassword: string) {
        this.loginService.registerLogin(username, email, password, confirmPassword).subscribe(
            {
                next: (result) => {
                    this.router.navigate(['/login']);
                    console.log('Registro exitoso:', result);
                    // Guardar el resultado en localStorage
                    //localStorage.setItem('successful registration', JSON.stringify(result));
                },
                error: (err) => {
                    console.error('Error al registrarse:', err);
                    // Si se produce un error, también puedes guardar el error en localStorage
                    //localStorage.setItem('Registration error', JSON.stringify(err));
                }
            }
        )
    }
}