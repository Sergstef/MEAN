import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private http: Http) { }

  deleteVacancy(obj: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/deleteVac',
                 obj,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  deleteArticle(obj: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/deleteArticle',
                 obj,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  deleteCV(obj: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/deleteCV',
                 obj,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  deleteVacancyFromDatabase(obj: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/deleteVacFromDatabase',
                 obj,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  deleteArticleFromDatabase(obj: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/deleteArticleFromDatabase',
                 obj,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }

  deleteCVFromDatabase(obj: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/deleteCVFromDatabase',
                 obj,
                 {headers: headers} 
                 ).pipe(map((response: any) => response.json()));
  }
}
