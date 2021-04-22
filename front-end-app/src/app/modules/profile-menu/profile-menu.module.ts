import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserCvsComponent } from './user-cvs/user-cvs.component';
import { UserResponsesComponent } from './user-responses/user-responses.component';
import { UserDocumentsComponent } from './user-documents/user-documents.component';
import { ProfileMenuRoutingModule } from './profile-menu-routing.module';



@NgModule({
  declarations: [ProfileComponent,
    UserCvsComponent,
    UserResponsesComponent,
    UserDocumentsComponent],
  imports: [
    CommonModule,
    ProfileMenuRoutingModule
  ]
})
export class ProfileMenuModule { }
