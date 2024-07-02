import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera.interfaces';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';

@Component({
  selector: 'app-peliculas-poster',
  standalone: true,
  imports: [CommonModule,PipesModule],
  templateUrl: './peliculas-poster.component.html',
  styleUrl: './peliculas-poster.component.css'
})
export class PeliculasPosterComponent {
  @Input() movies?:Movie[];

  constructor(private router:Router){}

  getStars(vote_average:number){
    const startCount=Math.floor(vote_average);
    return Array(startCount).fill(0);
  }
  onMovieClick(movie:Movie){
    this.router.navigate(['pelicula',movie.id])
  }
}
