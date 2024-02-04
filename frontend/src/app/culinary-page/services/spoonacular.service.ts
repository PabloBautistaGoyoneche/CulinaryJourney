import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class SpoonacularService {

    private apiKey = '52cff9c93801417f877a356f9a552a7e';
    private apiUrl = 'https://api.spoonacular.com'; 

    constructor(private http: HttpClient) {}

    getRandomRecipes(): Observable<any> {
        const url = `${this.apiUrl}/recipes/random?apiKey=${this.apiKey}&number=10`;
        return this.http.get(url);
    };
    
    
}