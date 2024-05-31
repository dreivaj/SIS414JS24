import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ListaComponent } from './pages/lista/lista.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { LoginComponent } from './pages/login/login.component';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path : "", component : MainComponent },
  { path : "lista", component : ListaComponent, ...canActivate(()=>redirectUnauthorizedTo(["login"])) },
  { path : "login", component : LoginComponent },
  { path : "**", component : NofoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
