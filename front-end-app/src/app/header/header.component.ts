import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AuthentificationService } from '../authentification.service';
import { CompanyAuthentificationService } from '../company-authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthentificationService,
  	public companyAuthentificationService: CompanyAuthentificationService) { }

  ngOnInit(): void {
  	 $(document).ready(function() {
	    $('.menu_burger').click(function() {
	        $('.menu_burger').toggleClass('open-menu');
	    });
	    $('.menu_burger').click(function(){
	        $('.menu_burger').toggleClass('open-menu');
	        $('.blocks').toggleClass('open-menu');
	    });
	});
  }
}
