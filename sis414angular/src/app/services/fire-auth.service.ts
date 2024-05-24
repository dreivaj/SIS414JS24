import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private auth: Auth) { }

  register(email:string, pass:string)
  {
    return createUserWithEmailAndPassword(this.auth, email, pass).then(
      (result)=>{
        console.log(result)    
      }
    ).catch((error)=>{
      console.log("Error" + error)
    })
  }

  login(user:string, pass:string)
  {
    return signInWithEmailAndPassword(this.auth, user, pass).then(result=>{})    
  }

  logout(){
    return signOut(this.auth).then(result=>{})
  }

  googleAuth() {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(result=>{})    
  }  

  currentUser(){
    return this.auth.currentUser
  }
}
