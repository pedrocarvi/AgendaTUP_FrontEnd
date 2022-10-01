import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./public/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "contacts",
    loadChildren: () => import('./public/pages/contacts-list/contacts-list.module').then(m => m.ContactsListModule)
  },
  {
    path: "addContact",
    loadChildren: () => import('./public/pages/add-contacts/add-contacts.module').then(m => m.AddContactsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: false,
      scrollPositionRestoration: "enabled"
    })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
