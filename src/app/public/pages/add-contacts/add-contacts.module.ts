import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactsRoutingModule } from './add-contacts-routing.module';
import { AddContactsComponent } from './add-contacts.component';

import { ContactAddComponent } from '../../components/contact-add/contact-add.component';




@NgModule({
  declarations: [
    AddContactsComponent,
    ContactAddComponent
  ],
  imports: [
    CommonModule,
    AddContactsRoutingModule

  ]
})
export class AddContactsModule { }
