import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsLoggedIn } from './isLogged.guard';
import { IsLoggedCompanyIn } from './isLoggedCompany.guard';
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
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { CompanyResponsesComponent } from './company-responses/company-responses.component';
import { CompanyDocumentsComponent } from './company-documents/company-documents.component';
import { VacancyCreationComponent } from './vacancy-creation/vacancy-creation.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { EmployersComponent } from './employers/employers.component';
import { EmployerComponent } from './employer/employer.component';
import { CompanyArticlesComponent } from './company-articles/company-articles.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { AdvicesComponent } from './advices/advices.component';
import { AdviceComponent } from './advice/advice.component';
import { CvsListComponent } from './cvs-list/cvs-list.component';
import { PublicCvPageComponent } from './public-cv-page/public-cv-page.component';

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
	{path: 'company-dashboard', component: CompanyDashboardComponent, canActivate: [IsLoggedCompanyIn],
		children: [
			{path: 'company-profile', component: CompanyProfileComponent},
			{path: 'company-vacancies', component: CompanyVacanciesComponent},
			{path: 'company-documents', component: CompanyDocumentsComponent},
			{path: 'company-responses', component: CompanyResponsesComponent},
			{path: '', redirectTo: 'company-profile', pathMatch: 'full'},
			{path: 'vacancy-page', component: VacancyPageComponent},
			{path: 'article-page', component: ArticlePageComponent},
			{path: 'company-articles', component: CompanyArticlesComponent}
		]
	},
	{path: 'cvcreation', component: CVcreationComponent},
	{path: 'vacancy-creation', component: VacancyCreationComponent},
	{path: 'article-creation', component: ArticleCreationComponent},
	{path: 'vacancies', component: VacanciesComponent},
	{path: 'advices', component: AdvicesComponent},
	{path: 'cvs-list', component: CvsListComponent},
	{path: 'vacancy', component: VacancyComponent},
	{path: 'public-cv-page', component: PublicCvPageComponent},
	{path: 'advice', component: AdviceComponent},
	{path: 'employers', component: EmployersComponent},
	{path: 'employer', component: EmployerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsLoggedIn]
})
export class AppRoutingModule { }
