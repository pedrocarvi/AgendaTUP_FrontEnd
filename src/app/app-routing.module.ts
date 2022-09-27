import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/components/LoginComponent/login.component';
import { ContactListComponent } from './public/components/ContactListComponent/contactList.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'contactList', component: ContactListComponent}
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
