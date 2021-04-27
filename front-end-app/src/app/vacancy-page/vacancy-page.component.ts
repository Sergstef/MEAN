import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.css']
})
export class VacancyPageComponent implements OnInit {

  vacancy: any;

  constructor(private companyAuthentificationService: CompanyAuthentificationService) { 
  	const vacancies = JSON.parse(this.companyAuthentificationService.getVacancies()!);
  	const index = +this.companyAuthentificationService.getIndex()!;
  	for(let i = 0; i < vacancies.length; i++) {
  		if (i == index) {
  			this.vacancy = vacancies[i];
  		}
  	}
  	console.log(this.vacancy);
  }

  ngOnInit(): void {
  }

}
