import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthentificationService } from './authentification.service';

@Injectable()

export class IsLoggedIn implements CanActivate {
	constructor(private router: Router,
          private authentificationService: AuthentificationService,
          ) { 
  	
  }

  canActivate() {
  	if(this.authentificationService.isLoggedIn()) {
  		return true;
  	} else {
  		this.router.navigate(['registration/']);
  		return false;
  	}
  }
}