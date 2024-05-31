import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ListaComponent } from './pages/lista/lista.component';
import { NofoundComponent } from './pages/nofound/nofound.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './commons/navbar/navbar.component';

import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ListaComponent,
    NofoundComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
