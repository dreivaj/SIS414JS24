import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { BanerComponent } from './commons/baner/baner.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UltimoComponent } from './commons/ultimo/ultimo.component';
import { DatosComponent } from './pages/datos/datos.component';
import { GeograficaComponent } from './pages/geografica/geografica.component';
import { EjecutivoComponent } from './pages/ejecutivo/ejecutivo.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { AsesoriaComponent } from './pages/asesoria/asesoria.component';
import { HistoriComponent } from './pages/histori/histori.component';
import { AuditoriComponent } from './pages/auditori/auditori.component';
import { HerdComponent } from './commons/herd/herd.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
   
    NofoundComponent,
    BanerComponent,
    InicioComponent,
    UltimoComponent,
    DatosComponent,
    GeograficaComponent,
    EjecutivoComponent,
    EstructuraComponent,
    DirectorioComponent,
    AsesoriaComponent,
    HistoriComponent,
    AuditoriComponent,
    HerdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
