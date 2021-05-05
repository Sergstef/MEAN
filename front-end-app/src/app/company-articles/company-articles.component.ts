import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-company-articles',
  templateUrl: './company-articles.component.html',
  styleUrls: ['./company-articles.component.css']
})
export class CompanyArticlesComponent implements OnInit {

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
      articles: this.company.articles,
      index: this.index
    }
    this.companyAuthentificationService.setArticlesIndex(obj);
  } 

}
