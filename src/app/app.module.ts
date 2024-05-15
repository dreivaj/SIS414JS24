import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { DatsituaComponent } from './pages/datsitua/datsitua.component';
import { PlantelejeComponent } from './pages/planteleje/planteleje.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { AsesoriaComponent } from './pages/asesoria/asesoria.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { AuditoriaComponent } from './pages/auditoria/auditoria.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DatsituaComponent,
    PlantelejeComponent,
    DirectorioComponent,
    AsesoriaComponent,
    HistorialComponent,
    AuditoriaComponent,
    EstructuraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
