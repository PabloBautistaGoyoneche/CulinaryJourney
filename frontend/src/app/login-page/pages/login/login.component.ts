import { Component } from '@angular/core';
import { LoginService } from '../../services/login-api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-main-page',
    templateUrl: './login.component.html'
})

export class LoginPageComponent {

    constructor(
        private loginService: LoginService,
        private router: Router,
    ) {}

    login(username: string, password: string) {
        this.loginService.login(username, password).subscribe(
            {
                next: (result) => {
                    this.router.navigate(['/culinary/home']);
                    console.log('Inicio de sesión exitoso:', result);
                    // Guardar el resultado en localStorage
                    localStorage.setItem('success', JSON.stringify(result));
                },
                error: (err) => {
                    console.error('Error al iniciar sesión:', err);
                    // Si se produce un error, también puedes guardar el error en localStorage
                    localStorage.setItem('error', JSON.stringify(err));
                }
            }
        )
    }

}