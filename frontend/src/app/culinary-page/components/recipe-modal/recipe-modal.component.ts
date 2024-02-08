import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Recipe } from '../../interfaces/recipe/recipe.interface';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-recipe-modal',
    templateUrl: 'recipe-modal.component.html',
    styleUrls: ['recipe.modal.component.css'],
})

export class RecipeModalComponent implements OnInit {
    constructor(
        private spoonacularService: SpoonacularService,
        private sanitizer: DomSanitizer,
        private apiService: ApiService,
    ) { }
    //@Input() showModal: boolean = false;
    @Output()
    public showModalChange = new EventEmitter<boolean>();

    @Input()
    public idrecipe: number = 0;

    public recipeData?: Recipe;

    closeModal():void {
       this.showModalChange.emit();
    }

    saveFavorite(): void {
        this.apiService.saveFavoritesByIdUser(1, this.idrecipe).subscribe((data) => {
            console.log(data);
        });
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