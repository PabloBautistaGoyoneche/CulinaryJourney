import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-favorite-page',
    templateUrl: 'favorite-page.component.html'
})

export class FavoritePageComponent implements OnInit {
    recipes: any[] = [];

    showAddFavoriteButton: boolean = false;
    showDeleteFavoriteButton: boolean = true;

    constructor(
        private spoonacularService: SpoonacularService,
        private apiService: ApiService,
    ) { }

    ngOnInit() {
        let dataList: any[] = [];
        this.recipes = [];
        
        this.apiService.showFavoritesByIdUser().subscribe((data) => {
            dataList = data;
            
            console.log('showFavoritesByIdUser', dataList);

            // dataList.forEach((result) => {
            //     this.spoonacularService.getRecipesById(result.recipe_id).subscribe((data) => {
            //         data.favorite_id = dataList.favorite_id;
            //         this.recipes.push(data);
            //     });
            // });

            for (let i = 0; i < dataList.length; i++) {
                this.spoonacularService.getRecipesById(dataList[i].recipe_id).subscribe((data) => {
                    data.favorite_id = dataList[i].favorite_id;
                    this.recipes.push(data);
                    console.log('data ---> favorite',data);
                });
            }
        });
    }

}