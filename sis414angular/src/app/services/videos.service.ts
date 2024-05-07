import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  lista:any = [
    { name:"Ejemplo 1", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
    { name:"Ejemplo 2", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
    { name:"Ejemplo 3", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
    { name:"Ejemplo 4", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
    { name:"Ejemplo 5", description: "Ejemplo", link:"http//", image:"./asse/imgds.png"},
  ]

  constructor() { }

  public getVideos():any{
    return this.lista;
  }
}
