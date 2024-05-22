import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 @Input() childTitle = ''
 @Output() newItemEvent = new EventEmitter<string>();
 text:string = "random" 
 i:number = 1
 fromChild()
 {
  this.newItemEvent.emit(this.text + this.i)
  this.i = this.i + 1
 }
}
