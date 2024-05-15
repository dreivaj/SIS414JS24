import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DatosComponent } from './pages/datos/datos.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { EjecutivoComponent } from './pages/ejecutivo/ejecutivo.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';
import { GeograficaComponent } from './pages/geografica/geografica.component';
import { AsesoriaComponent } from './pages/asesoria/asesoria.component';
import { HistoriComponent } from './pages/histori/histori.component';
import { AuditoriComponent } from './pages/auditori/auditori.component';
import { NofoundComponent } from './pages/nofound/nofound.component';

const routes: Routes = [
  { path : "", component : MainComponent},
  { path : "inicio", component : InicioComponent},
  { path : "datos", component : DatosComponent},
  { path : "directorio", component : DirectorioComponent}, 
  { path : "ejecutivo", component : EjecutivoComponent}, 
  { path : "estructura", component : EstructuraComponent},
  { path : "geografica", component : GeograficaComponent},      
  { path : "asesoria", component : AsesoriaComponent},
  { path : "histori", component : HistoriComponent}, 
  { path : "auditori", component : AuditoriComponent},  
  { path : "nofound",component : NofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
