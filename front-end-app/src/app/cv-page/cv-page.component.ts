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
	user: any;
	cvs: any;
  	index!: number;

  constructor(private authentificationService: AuthentificationService) { 
  	this.user = authentificationService.getUser();
  	this.user = JSON.parse(this.user);
  	
  }

  ngOnInit(): void {

  }



}
