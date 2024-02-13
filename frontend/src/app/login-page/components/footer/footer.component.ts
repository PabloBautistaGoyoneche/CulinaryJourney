import { Component } from '@angular/core';

@Component({
    selector: 'app-login-footer',
    templateUrl: './footer.component.html'
})

export class FooterLoginComponent {
    date = new Date().getFullYear();
}