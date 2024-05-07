import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  data:any = []; 

  constructor(private videos:VideosService){

  }

  ngOnInit() {
    this.data = this.videos.getVideos();
    console.log(this.data);
  }

}
