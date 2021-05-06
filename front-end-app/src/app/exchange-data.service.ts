import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {

  constructor() { }

  changeVacancy(vacancy: any) {
  	localStorage.vacancy = JSON.stringify(vacancy);
  }

  changeEmployer(employer: any) {
  	localStorage.employer = JSON.stringify(employer);
  }

  changeArticle(article: any) {
    localStorage.article = JSON.stringify(article);
  }

  changeCV(cv: any) {
    localStorage.cv = JSON.stringify(cv);
  }

  getVacancy() {
  	return localStorage.getItem('vacancy');
  }

  getEmployer() {
  	return localStorage.getItem('employer');
  }

  getArticle() {
    return localStorage.getItem('article');
  }

  getCV() {
    return localStorage.getItem('cv');
  }

}
