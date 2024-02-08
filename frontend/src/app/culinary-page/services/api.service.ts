import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {

    private apiUrl = 'http://localhost:8000';
    
    constructor(private http: HttpClient) {}

    saveFavoritesByIdUser(id: number, recipeId: number): Observable<any> {

        console.log('localStorage', localStorage.getItem('success'));

        // Obtener el token de localStorage
        const success = JSON.parse(localStorage.getItem('success')??'');
        const token = success?.access_token; // Acceder al token dentro de success
        console.log('token', token);
        
        // Verificar si el token está disponible
        if (!token) {
            throw new Error('No hay token de autenticación disponible');
        }
        
        // Configurar el encabezado de autorización con el token
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            // 'Access-Control-Allow-Credentials': 'true'
        });

        return this.http.post(`${this.apiUrl}/create-favorite-recipes`, { "user_id": id, "recipe_id": recipeId}, { headers });
    };
    
}