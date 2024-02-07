import { Component, Input, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Recipe } from '../../interfaces/recipe/recipe.interface';

@Component({
    selector: 'app-recipe-modal',
    templateUrl: 'recipe-modal.component.html',
    styleUrls: ['recipe.modal.component.css'],
})

export class RecipeModalComponent implements OnInit {
    constructor(
        private spoonacularService: SpoonacularService,
        private sanitizer: DomSanitizer
    ) { }
    @Input() showModal: boolean = false;
    @Input() idrecipe: any;

    public recipeData?: Recipe;

    closeModal() {
       this.showModal = false;
    }

    ngOnInit() {
        this.spoonacularService.getRecipesById(this.idrecipe).subscribe((data: Recipe) => {
            console.log(data);
            this.recipeData = data;
        });
    }

    getSanitizedSummary(): any {
        return this.sanitizer.bypassSecurityTrustHtml(this.recipeData!.summary??this.sanitizer.bypassSecurityTrustHtml(''));
    }
}