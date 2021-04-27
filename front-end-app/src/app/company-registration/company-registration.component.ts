import { Component, OnInit } from '@angular/core';
import { CompanyAuthentificationService } from '../company-authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

  constructor(private router: Router,
  			  private companyAuthentificationService: CompanyAuthentificationService
  			  ) { }

  ngOnInit(): void {
  }

  addUser(formObj: any) {
  	const company = {
  		name: formObj.name,
  		adress: formObj.adress,
  		phoneNumber: formObj.phoneNumber,
  		email: formObj.email,
  		password: formObj.password
  	}

    this.companyAuthentificationService.registerCompany(company).subscribe(data => {
      if(!data.success) {
        console.log('err.message');
        console.log(data.msg);
        this.router.navigate(['../company-registration']);
      } else {
        console.log(data.msg);
        this.router.navigate(['../company-auth']);
      }      
    });

  	
  }

}
