import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Movie } from '../interfaces/cartelera.interfaces';
import { __values } from 'tslib';
import { MovieDetails } from '../interfaces/details.interfaces';
import { Cast, Credits } from '../interfaces/credits.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private URL = 'https://api.themoviedb.org/3/';
  private apikey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTM0ZTAyYjI4YjQxYmNkM2Y1MWY1NmIyOTA2OTliNyIsIm5iZiI6MTcxOTYzNjMyMy4xNTcyODYsInN1YiI6IjY2NzhhZjU4NTkxNTU1MTVhNmQ5NWViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xAMvJ6s4vcaw-mTGMwfAYmx34bt0op2Rjoer3XWi4X4'
  private headers = { Authorization: `Bearer ${this.apikey}` };
  private cartelePage = 1;
  public cargando = false;

  constructor(private http: HttpClient) { }

  getCartelera(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }
    this.cargando = true;
    return this.http.get<Movie>(`${this.URL}/movie/now_playing?language=es-ES&page=${this.cartelePage}`, { headers: this.headers }).pipe(map((response: any) => response.results),
      tap(() => {
        this.cartelePage += 1;
        this.cargando = false;
      })

    );
  }

  
  buscarPeliculas(texto: string): Observable<Movie[]> {
    return this.http.get<{results:Movie[]}>(`${this.URL}search/movie?query=${texto}&language=es-ES&page=1`, { headers: this.headers }).pipe(
      map(response =>  response.results),
    )
  }

  peliculaDetails(id:string){
    return this.http.get<MovieDetails>(`${this.URL}/movie/${id}?language=es-ES`,{headers:this.headers}).pipe(
      catchError(err=>of(null))
    )
  }
  peliculasCreditos(id:String):Observable<Cast[] | null>{
    return this.http.get<Credits>(`${this.URL}/movie/${id}/credits?language=es-ES`,{headers:this.headers}).pipe(
      map(res=>res.cast),
      catchError(err=>of(null))
    )
  }
  // https://api.themoviedb.org/3/movie/{movie_id}/videos
  resetPeliculasPage(){
    this.cartelePage=1;
  }
}