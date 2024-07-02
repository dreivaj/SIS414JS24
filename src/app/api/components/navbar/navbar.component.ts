import { CommonModule } from '@angular/common';
import { Component, OnInit,Inject, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../../clients/service/auth/auth.service';
import HomenewComponent from '../../pages/home/homenew.component';
import BuscarComponent from '../../pages/buscar/buscar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,HomenewComponent,BuscarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(private router:Router){}

    ngOnInit(): void {
      
    }

    buscarPelicula(texto:string){

      texto = texto.trim();
      if (texto.length === 0) {
  
        return;
        
      }
  
      this.router.navigate(['buscar', texto]);
  
    }

    private _router = inject(Router);

    private authservice = inject(AuthService);
  
    async logOut(): Promise<void> {
      try {
        await this.authservice.logOut();
        this._router.navigateByUrl('/auth/login');
      } catch (error) {
        console.log(error);
      }
    }
    
}
