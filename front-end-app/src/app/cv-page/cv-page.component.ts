import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css']
})
export class CvPageComponent implements OnInit {
	cv: any;

  constructor(private authentificationService: AuthentificationService) { 
  	const cvs = this.authentificationService.getCvs()!;
  	const index = +this.authentificationService.getIndex()!;
  	for(let i = 0; i < cvs.length; i++) {
  		if (i == index) {
  			this.cv = cvs[i];
  		}
  	}
  }

  ngOnInit(): void {

  }



}
