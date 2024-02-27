import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"student-management-syste-57980","appId":"1:1065850020104:web:d5b0a33c55006276948cbd","storageBucket":"student-management-syste-57980.appspot.com","apiKey":"AIzaSyBNCj_ppKPJ2Je98BtifnAMTKm0ClxgQlQ","authDomain":"student-management-syste-57980.firebaseapp.com","messagingSenderId":"1065850020104"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: {"projectId":"student-management-syste-57980","appId":"1:1065850020104:web:d5b0a33c55006276948cbd","storageBucket":"student-management-syste-57980.appspot.com","apiKey":"AIzaSyBNCj_ppKPJ2Je98BtifnAMTKm0ClxgQlQ","authDomain":"student-management-syste-57980.firebaseapp.com","messagingSenderId":"1065850020104"} }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
