import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { IsLoggedIn } from './isLogged.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmEqualValidatorDirective } from './registration/confirm-equal-validator.directive';
import { AuthentificationService } from './authentification.service';
import { SelectAuthComponent } from './select-auth/select-auth.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CompanyAuthComponent } from './company-auth/company-auth.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileMenuComponent } from './modules/profile-menu/profile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    ConfirmEqualValidatorDirective,
    RegistrationComponent,
    SelectAuthComponent,
    CompanyRegistrationComponent,
    CompanyAuthComponent,
    CompanyDashboardComponent,
    DashboardComponent,
    ProfileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthentificationService, IsLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
