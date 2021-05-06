import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { DeleteDataService } from '../delete-data.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css']
})
export class CvPageComponent implements OnInit {
	cv: any;

  constructor(private authentificationService: AuthentificationService,
    private deleteDataService: DeleteDataService,
    private router: Router) { 
  	const cvs = JSON.parse(this.authentificationService.getCvs()!);
  	const index = +this.authentificationService.getIndex()!;
  	for(let i = 0; i < cvs.length; i++) {
  		if (i == index) {
  			this.cv = cvs[i];
  		}
  	}
  	console.log(this.cv);
  }

  ngOnInit(): void {

  }

  deleteCV() {
    const userObj = JSON.parse(this.authentificationService.getUser()!);
    const cvObj = this.cv;
    const obj = {
      user: userObj,
      cv: cvObj
    }
    this.deleteDataService.deleteCV(obj).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/dashboard/user-profile']);
      } else {
        console.log(data.msg);
      }  
    });
    this.deleteDataService.deleteCVFromDatabase(obj).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/dashboard/user-profile']);
      } else {
        console.log(data.msg);
      }  
    });
    this.authentificationService.updateUser(userObj).subscribe(data => {
      if(!data.success) {
        console.log(data.msg);
        this.router.navigate(['/dashboard/user-profile']);
      } else {
        console.log(data.user);
        this.router.navigate(['/dashboard/user-cvs']);
        this.authentificationService.storeUser(data.token, data.user);
      }  
    });
  }

}
