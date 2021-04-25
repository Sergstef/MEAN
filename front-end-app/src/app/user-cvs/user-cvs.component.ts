import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-cvs',
  templateUrl: './user-cvs.component.html',
  styleUrls: ['./user-cvs.component.css']
})
export class UserCvsComponent implements OnInit {

  constructor(private router: Router,
          private authentificationService: AuthentificationService,
          private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

}
