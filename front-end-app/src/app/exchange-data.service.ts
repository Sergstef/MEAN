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

  getVacancy() {
  	return localStorage.getItem('vacancy');
  }

  getEmployer() {
  	return localStorage.getItem('employer');
  }
}
