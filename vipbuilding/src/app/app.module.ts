import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleNavComponent } from './single-nav/single-nav.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './admin/login/login.component';
import { AuthService } from "./services/auth.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';

const config = {
  apiKey: 'AIzaSyDO9vuk0XDRUCjQdsvy8iqJf0_1DblyLyA',
  authDomain: 'vip-building-group.firebaseapp.com',
  databaseURL: 'https://vip-building-group.firebaseio.com',
  projectId: 'vip-building-group',
  storageBucket: 'vip-building-group.appspot.com',
  messagingSenderId: '100028340892'
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingleNavComponent,
    AboutComponent,
    PartnersComponent,
    LoginComponent,
    DashboardComponent,
    ContactsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
     FontAwesomeModule,
     ScullyLibModule,
  ],
  providers: [AuthService,  ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
