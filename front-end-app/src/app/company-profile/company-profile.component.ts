import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  company: any;

  constructor(private companyAuthentificationService: CompanyAuthentificationService) { 
  	this.company = companyAuthentificationService.getCompany();
  	this.company = JSON.parse(this.company);
    console.log(this.company);
  }

  ngOnInit(): void {
  }

}
