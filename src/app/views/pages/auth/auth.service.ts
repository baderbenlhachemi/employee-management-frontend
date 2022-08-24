/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
*/
//Auth Service
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const BaseUrl = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private http: HttpClient) { }
    login(username : string , password : string ): Observable<any> {
      return this.http.post(BaseUrl + 'login', {username, password}, httpOptions);
    }
    register(username : string ,email:string , password : string ): Observable<any> {
      return this.http.post(BaseUrl + 'register', {username, password, email }, httpOptions);
    }
    logout(): Observable<any> {
      return this.http.post(BaseUrl + 'logout', {}, httpOptions);
    }

  }

