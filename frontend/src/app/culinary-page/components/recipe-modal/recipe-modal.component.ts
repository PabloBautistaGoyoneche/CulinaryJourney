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
    @Output()
    public showModalChange = new EventEmitter<boolean>();

    @Input()
    public showAddButtonCM: boolean = true;

    @Input()
    public showDeleteButtonCM: boolean = true;
    
    @Input()
    public recipeData?: Recipe;

    closeModal():void {
       this.showModalChange.emit();
    }

    saveFavorite(): void {
        this.apiService.saveFavoritesByIdUser(this.recipeData!.id).subscribe((data) => {
            console.log(data);
        });
        this.closeModal();
    }

    deleteFavorite(): void {
        console.log('---Delete---recipeData',this.recipeData!);
        this.apiService.deleteFavoritesByIdUser(this.recipeData!.favorite_id).subscribe((data) => {
            console.log(data);
        });
        this.closeModal();
        window.location.reload();
    }

    ngOnInit() {}

    getSanitizedSummary(): any {
        return this.sanitizer.bypassSecurityTrustHtml(this.recipeData!.summary??this.sanitizer.bypassSecurityTrustHtml(''));
    }
}