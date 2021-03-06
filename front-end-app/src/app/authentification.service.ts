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
  cvs: any;
  index!: number;

  constructor(private http: Http) { }

  registerUser(user: any) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/account/reg',
  							 user,
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

  addCV(arr: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/addCV',
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

  updateUser(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/updateUser',
                 user,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  storeUser(token: any, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('user');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  setCvsIndex(obj: any) {
    localStorage.cvs = JSON.stringify(obj.cvs);
    localStorage.setItem('index', obj.index);
  }

  getCvs() {
    return localStorage.getItem('cvs');
  }

  getIndex() {
    return localStorage.getItem('index');
  }

}
