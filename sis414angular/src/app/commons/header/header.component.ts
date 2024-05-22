import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displayTitle:string = "Sis 414 G2 1/2024"
  i:number = 1
  change(){
    this.displayTitle  = this.displayTitle + this.i
    this.i = this.i + 1 
  }

  addItem(event: any) {
    console.log(event)
    this.displayTitle = this.displayTitle + event
  }
}
