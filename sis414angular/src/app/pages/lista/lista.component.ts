import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  data:any = []; 

  dataList:Video[] = []; 

  constructor(private videos:VideosService){

  }

  ngOnInit() {
    this.data = this.videos.getVideos();
    console.log(this.data);
    this.videos.postrandom().subscribe((data)=>{
      console.log(data)
    })

    this.videos.getLista().subscribe((data:any)=>{
      for(let key in data){
        this.dataList.push(data[key]) 
      }
      console.log(this.dataList)
    })
  }
}
