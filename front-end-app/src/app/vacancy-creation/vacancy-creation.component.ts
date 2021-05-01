import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-vacancy-creation',
  templateUrl: './vacancy-creation.component.html',
  styleUrls: ['./vacancy-creation.component.css']
})
export class VacancyCreationComponent implements OnInit {

  company: any;

  constructor(private router: Router, private companyAuthentificationService: CompanyAuthentificationService) { 
  	this.company = companyAuthentificationService.getCompany();
  	this.company = JSON.parse(this.company);
  }

  ngOnInit(): void {
  }


  addVacancy(formObj: any) {
  	const obj = {
  		name: formObj.name,
  		email: formObj.email,
  		city: formObj.city,
  		position: formObj.position,
  		salary: formObj.salary,
  		occupation: formObj.occupation,
  		experience: formObj.experience,
  		responsibility: formObj.responsibility,
  		requirements: formObj.requirements,
  		conditions: formObj.conditions,
  		aboutYou: formObj.aboutYou
  	}

  	const vacancyCompanyArr = {
  		vacancy: obj,
  		company: this.company
  	}

    this.companyAuthentificationService.addVacancy(vacancyCompanyArr).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/company-dashboard/company-profile']);
      } else {
        console.log(data.msg);
      }  
    });

  	this.companyAuthentificationService.registerVacancy(vacancyCompanyArr).subscribe(data => {
  		if(!data.success) {
        console.log('err.message');
  			console.log(data.msg);
  			this.router.navigate(['/company-dashboard/company-profile']);
  		} else {
  			console.log(data.msg);
  		}  		
  	});

    this.companyAuthentificationService.updateCompany(this.company).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/company-dashboard/company-profile']);
      } else {
        console.log(data.company);
        this.router.navigate(['/company-dashboard/company-vacancies']);
        this.companyAuthentificationService.storeCompany(data.token, data.company);
      }  
    });
  }

}
