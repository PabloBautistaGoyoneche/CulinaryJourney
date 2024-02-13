import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Recipe } from '../../interfaces/recipe/recipe.interface';

@Component({
    selector: 'app-recipe-view',
    templateUrl: 'recipe-view.component.html'
})

export class RecipeViewComponent {
    constructor(private sanitizer: DomSanitizer) {}
    showModal: boolean = false;
    @Input() 
    recipe?: Recipe;

    @Input()
    public showAddButtonCV: boolean = true;

    @Input()
    public showDeleteButtonCV: boolean = true;

    toggleModal() {
        this.showModal = !this.showModal;
    }

    getSanitizedSummary(): any {
        return this.sanitizer.bypassSecurityTrustHtml(this.recipe?.summary??'');
    }
}