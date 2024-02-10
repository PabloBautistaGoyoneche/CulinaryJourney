import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-favorite-page',
    templateUrl: 'favorite-page.component.html'
})

export class FavoritePageComponent implements OnInit {
    recipes: any[] = [];

    constructor(
        private spoonacularService: SpoonacularService,
        private apiService: ApiService,
    ) { }

    ngOnInit() {
        let dataList: any[] = [];
        this.recipes = [];
        
        this.apiService.showFavoritesByIdUser().subscribe((data) => {
            dataList = data;
            
            console.log(data);

            dataList.forEach((result) => {
                this.spoonacularService.getRecipesById(result.recipe_id).subscribe((data) => {
                    this.recipes.push(data);
                });
            });
        });
    }

}