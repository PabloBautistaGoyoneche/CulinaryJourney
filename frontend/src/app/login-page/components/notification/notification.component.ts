import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html'
})

export class NotificationComponent {
    @Input() message: string = '';
    @Input() show: boolean = false;
}