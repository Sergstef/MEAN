import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserCvsComponent } from './user-cvs/user-cvs.component';
import { UserResponsesComponent } from './user-responses/user-responses.component';
import { UserDocumentsComponent } from './user-documents/user-documents.component';

const routes: Routes = [
	{path: 'modules/profile-menu', component: ProfileComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'user-cvs', component: UserCvsComponent},
	{path: 'user-responses', component: UserResponsesComponent},
	{path: 'user-documents', component: UserDocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProfileMenuRoutingModule { }
