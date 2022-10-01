import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactsRoutingModule } from './add-contacts-routing.module';
import { AddContactsComponent } from './add-contacts.component';


@NgModule({
  declarations: [
    AddContactsComponent
  ],
  imports: [
    CommonModule,
    AddContactsRoutingModule
  ]
})
export class AddContactsModule { }
