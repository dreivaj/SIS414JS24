import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeliculasPosterComponent } from '../../components/peliculas-poster/peliculas-poster.component';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera.interfaces';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule,PeliculasPosterComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export default class BuscarComponent implements OnInit{
  
  texto='';
  movies:Movie[]=[];
  noMovie='';
  constructor(private activatedRoute:ActivatedRoute,private peliculasSvc:PeliculasService){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{

      this.texto=params['texto'];

      this.peliculasSvc.buscarPeliculas(this.texto).subscribe(movies=>{
        this.movies=movies;
        if(this.movies.length==0){
          this.noMovie='no se encontro la peli'
        }
      })
    })
  }

}
