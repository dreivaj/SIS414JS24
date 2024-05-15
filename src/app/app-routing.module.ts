import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DatsituaComponent } from './pages/datsitua/datsitua.component';
import { PlantelejeComponent } from './pages/planteleje/planteleje.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { AsesoriaComponent } from './pages/asesoria/asesoria.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { AuditoriaComponent } from './pages/auditoria/auditoria.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "datsitua", component: DatsituaComponent },
  { path: "planteleje", component: PlantelejeComponent },
  { path: "estructura", component: EstructuraComponent },
  { path: "directorio", component: DirectorioComponent },
  { path: "asesoria", component: AsesoriaComponent },
  { path: "historial", component: HistorialComponent },
  { path: "auditoria", component: AuditoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
