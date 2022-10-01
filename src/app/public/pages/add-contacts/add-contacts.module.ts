import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactsRoutingModule } from './add-contacts-routing.module';


@NgModule({
  declarations: [
    AddContactsModule
  ],
  imports: [
    CommonModule,
    AddContactsRoutingModule
  ]
})
export class AddContactsModule { }
