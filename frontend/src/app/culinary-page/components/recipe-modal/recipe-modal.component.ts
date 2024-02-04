import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-recipe-modal',
    templateUrl: 'recipe-modal.component.html',
    styleUrls: ['recipe.modal.component.css'],
})

export class RecipeModalComponent {
    @Input() showModal: boolean = false;

    closeModal() {
        this.showModal = false;
    }
}