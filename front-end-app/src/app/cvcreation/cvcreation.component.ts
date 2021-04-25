import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-cvcreation',
  templateUrl: './cvcreation.component.html',
  styleUrls: ['./cvcreation.component.css']
})
export class CVcreationComponent implements OnInit {

  user: any;

  constructor(private router: Router, private authentificationService: AuthentificationService) { 
  	this.user = authentificationService.getUser();
  	this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {
  }

  addCV(formObj: any) {
  	const obj = {
  		name: formObj.name,
  		surname: formObj.surname,
  		phoneNumber: formObj.phoneNumber,
  		email: formObj.email,
  		age: formObj.age,
  		city: formObj.city,
  		position: formObj.position,
  		salary: formObj.salary,
  		occupation: formObj.occupation,
  		education: formObj.education,
  		educationPlace: formObj.educationPlace,
  		faculty: formObj.faculty,
  		speciality: formObj.speciality,
  		aboutYou: formObj.aboutYou
  	}

  	const CVUserArr = {
  		CV: obj,
  		user: this.user
  	}

    this.authentificationService.addCV(CVUserArr).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/dashboard/profile']);
      } else {
        console.log(data.msg);
      }  
    });

  	this.authentificationService.registerCV(CVUserArr).subscribe(data => {
  		if(!data.success) {
        console.log('err.message');
  			console.log(data.msg);
  			this.router.navigate(['/dashboard/profile']);
  		} else {
  			console.log(data.msg);
  			this.router.navigate(['/dashboard/user-cvs']);
  		}  		
  	});
  }

}
