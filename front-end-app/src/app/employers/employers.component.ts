import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { ExchangeDataService } from '../exchange-data.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Company } from '../company';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

	companies!: Array<Company>;

  constructor(private loadDataService: LoadDataService, private exchangeDataService: ExchangeDataService) { }

  ngOnInit(): void {
  	this.get();
  }

  get() {
  	this.loadDataService.loadCompanies()
  					.subscribe((results) => {this.companies = results;});
  }

  sendEmp(employer: any) {
    this.exchangeDataService.changeEmployer(employer);
  }

}
