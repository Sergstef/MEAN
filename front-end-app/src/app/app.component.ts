import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-app';

  constructor(public authService: AuthentificationService) { }
}
