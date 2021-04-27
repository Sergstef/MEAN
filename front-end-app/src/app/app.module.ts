import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { IsLoggedIn } from './isLogged.guard';
import { IsLoggedCompanyIn } from './isLoggedCompany.guard';

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
import { ProfileComponent } from './profile/profile.component';
import { UserCvsComponent } from './user-cvs/user-cvs.component';
import { UserDocumentsComponent } from './user-documents/user-documents.component';
import { UserResponsesComponent } from './user-responses/user-responses.component';
import { CVcreationComponent } from './cvcreation/cvcreation.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { CompanyResponsesComponent } from './company-responses/company-responses.component';
import { CompanyDocumentsComponent } from './company-documents/company-documents.component';
import { VacancyCreationComponent } from './vacancy-creation/vacancy-creation.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';

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
    ProfileComponent,
    UserCvsComponent,
    UserDocumentsComponent,
    UserResponsesComponent,
    CVcreationComponent,
    CvPageComponent,
    CompanyProfileComponent,
    CompanyVacanciesComponent,
    CompanyResponsesComponent,
    CompanyDocumentsComponent,
    VacancyCreationComponent,
    VacancyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthentificationService, IsLoggedIn, IsLoggedCompanyIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
