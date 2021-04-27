import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  constructor(private router: Router,
          private companyAuthentificationService: CompanyAuthentificationService,
          private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

  logoutUser() {
  	this.companyAuthentificationService.logoutCompany();
  	this.router.navigate(['../home']);
  	return false;
  }



}
