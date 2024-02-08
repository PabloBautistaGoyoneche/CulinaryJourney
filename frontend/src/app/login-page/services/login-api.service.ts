import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoginService {

    private apiUrl = 'http://localhost:8000'; 

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        console.log('login', username, password);
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post(`${this.apiUrl}/login`, formData);
    }

    registerLogin(username: string, email: string, password: string, confirm_password: string) {
        return this.http.post(`${this.apiUrl}/register-users`, { "username": username, "email": email, "hashed_password": password, "confirm_password": confirm_password });
    }
    
}