import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  token: any; 
  user: any;
  company: any;

  constructor(private http: Http) { }

  registerUser(user: any) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/account/reg',
  							 user,
  							 {headers: headers} 
  							 ).pipe(map((response: any) => response.json()));
  }

  registerCompany(company: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/regCompany',
                 company,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  registerCV(arr: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/regCV',
                 arr,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  authUser(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/auth',
                 user,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  authCompany(company: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/authCompany',
                 company,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  storeUser(token: any, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  storeCompany(token: any, company: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('company', JSON.stringify(company));
    this.token = token;
    this.company = company;
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  logoutCompany() {
    this.token = null;
    this.company = null;
    localStorage.clear();
  }

  isLoggedIn() {
    return tokenNotExpired();
  }

  getUser() {
    return localStorage.getItem('user');
  }

}
