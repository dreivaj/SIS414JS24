import { Component } from '@angular/core';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displayTitle:string = "Sis 414 G2 1/2024"
  i:number = 1

  constructor(private auth:FireAuthService){}
  change(){
    this.displayTitle  = this.displayTitle + this.i
    this.i = this.i + 1 
  }

  addItem(event: any) {
    console.log(event)
    this.displayTitle = this.displayTitle + event
  }

  logout(){
    this.auth.logout()
  }
}
