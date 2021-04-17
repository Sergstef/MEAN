import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	dataRegister: any={};

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
  		this.dataRegister = data;
  		if(!this.dataRegister.success) {
  			console.log(this.dataRegister.msg);
  			this.router.navigate(['/auth']);
  		} else {
  			console.log(this.dataRegister.msg);
  			this.router.navigate(['/auth']);
  		}  		
  	});
  }

}
