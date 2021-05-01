import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { ExchangeDataService } from '../exchange-data.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
  providers: [LoadDataService]
})
export class VacanciesComponent implements OnInit {

  vacancies!: Array<Vacancy>;

  constructor(private loadDataService: LoadDataService, private exchangeDataService: ExchangeDataService) { 
  }

  ngOnInit(): void {
  	this.get();
  }

  get() {
  	this.loadDataService.loadVacancies()
  					.subscribe((results) => {this.vacancies = results;});
  }

  sendVac(vacancy: any) {
    this.exchangeDataService.changeVacancy(vacancy);
  }

}
