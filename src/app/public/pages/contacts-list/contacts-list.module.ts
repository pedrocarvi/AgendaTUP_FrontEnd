import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './contacts-list.component';

import { NavbarComponent } from '../../components/contactList-navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ContactsListComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ContactsListRoutingModule,
    FontAwesomeModule
  ]
})
export class ContactsListModule { }
