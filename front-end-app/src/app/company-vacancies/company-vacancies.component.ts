import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {

  company: any;
  index!: number;

  constructor(private companyAuthentificationService: CompanyAuthentificationService) { 
  	this.company = companyAuthentificationService.getCompany();
  	this.company = JSON.parse(this.company);
    console.log(this.company);
  }

  ngOnInit(): void {
  }

  setIndex(index: number) {
    this.index = index;
    const obj = {
      vacancies: this.company.vacancies,
      index: this.index
    }
    this.companyAuthentificationService.setVacanciesIndex(obj);
  } 

}
