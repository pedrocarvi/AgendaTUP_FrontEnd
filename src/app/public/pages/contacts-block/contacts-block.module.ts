import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component


import { ContactsBlockRoutingModule } from './contacts-block-routing.module';

import { ContactBlockComponent } from '../../components/contact-block/contact-block.component';
import { ContactsBlockComponent } from './contacts-block.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    ContactBlockComponent,
    ContactsBlockComponent
  ],
  imports: [
    CommonModule,
    ContactsBlockRoutingModule,
    MatSlideToggleModule
    
  ]
})
export class ContactsBlockModule { }
