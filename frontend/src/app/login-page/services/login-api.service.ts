import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoginService {
    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        console.log('login', username, password);
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post('http://localhost:8000/login', formData);
    }

    registerLogin(username: string, email: string, password: string, confirm_password: string) {
        return this.http.post('http://localhost:8000/register-users', { "username": username, "email": email, "hashed_password": password, "confirm_password": confirm_password });
    }
    
}