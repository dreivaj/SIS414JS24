import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cont: number = 0;
  isClicked: boolean[] = [false, false, false, false, false];
  onclick(i: number){
    this.isClicked[i] = !this.isClicked[i];
    this.cont= 0;
    while(this.cont < this.isClicked.length){
      if(this.cont != i)
        this.isClicked[this.cont] = false;
      this.cont = this.cont + 1;
    }
  }

  exit(){
    while(this.cont < this.isClicked.length){
      this.isClicked[this.cont] = false;
    }
  }
}



