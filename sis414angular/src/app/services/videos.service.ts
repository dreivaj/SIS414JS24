import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  url:string = 'https://decoracionesinteriores-cb418-default-rtdb.firebaseio.com/videos.json'

  lista:any = [
    { name:"Ejemplo 1", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
    { name:"Ejemplo 2", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
    { name:"Ejemplo 3", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
    { name:"Ejemplo 4", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
    { name:"Ejemplo 5", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
  ]

  constructor(private http:HttpClient) { }

  postrandom():Observable<Video>{
    let movie = {
      name:"jdk",
      decription:"hola"
    }
    return this.http.post<Video>(this.url, movie)    
  }

  getLista():Observable<Video>{
    return this.http.get<Video>(this.url)
  }

  public getVideos():any{
    return this.lista;
  }
}
