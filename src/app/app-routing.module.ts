import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contactUs",component: ContactComponent },
  { path: "users", component: UserComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
