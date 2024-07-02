import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './clients/components/core/guards';


export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children:[
      {
        path:'home',
        loadComponent: () => import('../app/api/pages/home/homenew.component'),
      },
      {
        path:'pelicula/:id',
        loadComponent: () => import('../app/api/pages/pelicula/pelicula.component'),
      },
      {
        path:'buscar/:texto',
        loadComponent: () => import('../app/api/pages/buscar/buscar.component'),
      }
    ]
  },

  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'sign',
        loadComponent: () => import('../app/clients/components/pages/registrar-usuario/registrar-usuario.component'),
      },
      {
        path: 'login',
        loadComponent: () => import('../app/clients/components/pages/login/login.component'),
      },
    ],
  },
];
