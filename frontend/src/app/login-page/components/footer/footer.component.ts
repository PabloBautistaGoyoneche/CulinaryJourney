import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-footer',
    templateUrl: './footer.component.html'
})

export class FooterLoginComponent  implements OnInit {
    date = new Date().getFullYear();
    constructor() { }

    ngOnInit() { }
}