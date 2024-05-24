import { Component } from '@angular/core';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fireAuth:FireAuthService){}

  addUser(){
    console.log("test")
    this.fireAuth.register("sis414g4@hotmail.com", "12345678")
  }

  loginGoogle(){
    console.log("test google")
    this.fireAuth.googleAuth()
  }
}
