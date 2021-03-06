import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,
  			  private authentificationService: AuthentificationService
  			  ) { }

  ngOnInit(): void {
  }

  addUser(formObj: any) {
  	const user = {
  		name: formObj.name,
  		surname: formObj.surname,
  		phoneNumber: formObj.phoneNumber,
  		email: formObj.email,
  		password: formObj.password
  	}

  	this.authentificationService.registerUser(user).subscribe(data => {
  		if(!data.success) {
        console.log('err.message');
  			console.log(data.msg);
  			this.router.navigate(['/registration']);
  		} else {
  			console.log(data.msg);
  			this.router.navigate(['/auth']);
  		}  		
  	});
  }

}
