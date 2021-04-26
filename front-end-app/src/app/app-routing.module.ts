import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsLoggedIn } from './isLogged.guard';
import { SelectAuthComponent } from './select-auth/select-auth.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CompanyAuthComponent } from './company-auth/company-auth.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserCvsComponent } from './user-cvs/user-cvs.component';
import { UserDocumentsComponent } from './user-documents/user-documents.component';
import { UserResponsesComponent } from './user-responses/user-responses.component';
import { CVcreationComponent } from './cvcreation/cvcreation.component';
import { CvPageComponent } from './cv-page/cv-page.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'auth', component: AuthComponent},
	{path: 'registration', component: RegistrationComponent},
	{path: 'home', component: HomeComponent},
	{path: 'dashboard', component: DashboardComponent, canActivate: [IsLoggedIn],
		children: [
			{path: 'profile', component: ProfileComponent},
			{path: 'user-cvs', component: UserCvsComponent},
			{path: 'user-documents', component: UserDocumentsComponent},
			{path: 'user-responses', component: UserResponsesComponent},
			{path: '', redirectTo: 'profile', pathMatch: 'full'},
			{path: 'cv-page', component: CvPageComponent}
		]},
	{path: 'select-auth', component: SelectAuthComponent},
	{path: 'company-registration', component: CompanyRegistrationComponent},
	{path: 'company-auth', component: CompanyAuthComponent},
	{path: 'company-dashboard', component: CompanyDashboardComponent, canActivate: [IsLoggedIn]},
	{path: 'cvcreation', component: CVcreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsLoggedIn]
})
export class AppRoutingModule { }
