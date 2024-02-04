import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-footer',
    templateUrl: './footer-main.component.html',
})

export class FooterMainComponent  implements OnInit {
    date = new Date().getFullYear();
    constructor() { }

    ngOnInit() { }
}