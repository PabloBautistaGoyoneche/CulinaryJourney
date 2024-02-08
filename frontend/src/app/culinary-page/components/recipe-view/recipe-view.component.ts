import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-recipe-view',
    templateUrl: 'recipe-view.component.html'
})

export class RecipeViewComponent {
    constructor(private sanitizer: DomSanitizer) {}
    showModal: boolean = false;
    @Input() recipe: any;

    toggleModal() {
        console.log('id receta', this.recipe.id);
        this.showModal = !this.showModal;
    }

    getSanitizedSummary(): any {
        return this.sanitizer.bypassSecurityTrustHtml(this.recipe.summary);
    }
}