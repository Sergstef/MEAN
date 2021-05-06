import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { DeleteDataService } from '../delete-data.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.css']
})
export class VacancyPageComponent implements OnInit {

  vacancy: any;

  constructor(private companyAuthentificationService: CompanyAuthentificationService,
    private deleteDataService: DeleteDataService,
    private router: Router) { 
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

  deleteVacancy() {
    const companyObj = JSON.parse(this.companyAuthentificationService.getCompany()!);
    const vacancyObj = this.vacancy;
    const obj = {
      company: companyObj,
      vacancy: vacancyObj
    }
    this.deleteDataService.deleteVacancy(obj).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/company-dashboard/company-profile']);
      } else {
        console.log(data.msg);
      }  
    });
    this.deleteDataService.deleteVacancyFromDatabase(obj).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/company-dashboard/company-profile']);
      } else {
        console.log(data.msg);
      }  
    });
    this.companyAuthentificationService.updateCompany(companyObj).subscribe(data => {
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
