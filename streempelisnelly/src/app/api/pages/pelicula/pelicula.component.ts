import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../../interfaces/details.interfaces';
import { Cast } from '../../interfaces/credits.interfaces';
import { combineLatest } from 'rxjs';
import { PipesModule } from '../../pipes/pipes.module';
import { CastSlideShowComponent } from '../../components/cast-slide-show/cast-slide-show.component';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule,PipesModule,CastSlideShowComponent],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export default class PeliculaComponent implements OnInit{
  pelicula?:MovieDetails;
  cast:Cast[]=[]

  constructor(private activatedRoute:ActivatedRoute, private peliculasSvc:PeliculasService){}

  ngOnInit(): void {
    const {id}=this.activatedRoute.snapshot.params;
    combineLatest([
      this.peliculasSvc.peliculaDetails(id),
      this.peliculasSvc.peliculasCreditos(id),
    ]).subscribe(([movie,cast])=>{

      if (movie === null || cast === null) {

        console.error('Error: La pelicula o el reparto no se encontraron');
        return;
        
      }

      this.pelicula= movie;
      this.cast = cast;


    })
  }
  
  getStars(voteAverage:number){

    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);

  }
  regresar(){
    window.history.back();
  }
}

