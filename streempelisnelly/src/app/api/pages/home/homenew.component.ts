import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera.interfaces';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';
import { PeliculasPosterComponent } from '../../components/peliculas-poster/peliculas-poster.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homenew',
  standalone: true,
  imports: [CommonModule,SlideshowComponent,PeliculasPosterComponent ],
  templateUrl: './homenew.component.html',
  styleUrl: './homenew.component.css'
})
export default class HomenewComponent  implements OnInit{
  
  movies:Movie[]=[];
  loadedMoviesIds=new Set<number>()

  @HostListener('window:scroll',['[$event]'])
  onScroll(){
    const pos=(document.documentElement.scrollTop || document.body.scrollTop)+1000;
    const max=(document.documentElement.scrollHeight || document.body.scrollHeight);
    if (pos > max) {

      this.loadMoreMovies();
        
      }
  }

  constructor(private peliculasSvc:PeliculasService){
    this.peliculasSvc.resetPeliculasPage();
  }
  ngOnInit(): void {
    this.loadMovies();
  }
  loadMovies(){

    this.peliculasSvc.getCartelera().subscribe(res=>{
       this.movies = res;
       this.updateLoadedMovieIds();

    })

  }
  
  loadMoreMovies(){
   
    this.peliculasSvc.getCartelera().subscribe(res=>{
      const newMovies = res.filter(movie=>!this.loadedMoviesIds.has(movie.id));
      this.movies.push(...newMovies);
      this.updateLoadedMovieIds();
    })
    
  }
  updateLoadedMovieIds(){
    this.movies.forEach(movie=>this.loadedMoviesIds.add(movie.id));
  }
}
