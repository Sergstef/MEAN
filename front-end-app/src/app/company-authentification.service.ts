import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class CompanyAuthentificationService {

	 token: any; 
	 company: any;

  constructor(private http: Http) { }

  registerCompany(company: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/regCompany',
                 company,
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

  addVacancy(arr: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/addVacancy',
                 arr,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  addArticle(arr: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/addArticle',
                 arr,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  registerVacancy(arr: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/regVacancy',
                 arr,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  registerArticle(arr: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/regArticle',
                 arr,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  updateCompany(company: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/updateCompany',
                 company,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  storeCompany(token: any, company: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('company', JSON.stringify(company));
    this.token = token;
    this.company = company;
  }

  logoutCompany() {
    this.token = null;
    this.company = null;
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('company');
  }

  getCompany() {
    return localStorage.getItem('company');
  }

  setVacanciesIndex(obj: any) {
    localStorage.vacancies = JSON.stringify(obj.vacancies);
    localStorage.setItem('index', obj.index);
  }

  setArticlesIndex(obj: any) {
    localStorage.articles = JSON.stringify(obj.articles);
    localStorage.setItem('articleIndex', obj.index);
  }

  getVacancies() {
    return localStorage.getItem('vacancies');
  }

  getArticles() {
    return localStorage.getItem('articles');
  }

  getIndex() {
    return localStorage.getItem('index');
  }

  getArticleIndex() {
    return localStorage.getItem('articleIndex');
  }
}
