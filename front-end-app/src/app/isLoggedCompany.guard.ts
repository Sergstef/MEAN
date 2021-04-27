import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CompanyAuthentificationService } from './company-authentification.service';

@Injectable()

export class IsLoggedCompanyIn implements CanActivate {
	constructor(private router: Router,
          private companyAuthentificationService: CompanyAuthentificationService,
          ) { 
  	
  }

  canActivate() {
  	if(this.companyAuthentificationService.isLoggedIn()) {
  		return true;
  	} else {
  		this.router.navigate(['registration/']);
  		return false;
  	}
  }
}