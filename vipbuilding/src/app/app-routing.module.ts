import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './admin/login/login.component';

import { AuthGuard } from "../../src/app/shared/guard/auth.guard";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login' , component:LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'contacts' , component: ContactsComponent},
  {path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
