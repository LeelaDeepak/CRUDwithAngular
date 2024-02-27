import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseauth:AngularFireAuth, private router:Router) { }

  //login method
  login(email:string,password:string){
    this.firebaseauth.signInWithEmailAndPassword(email,password).then((res)=>{
      localStorage.setItem('token','true');
      this.router.navigate(['/dashboard']);
    },err=>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email:string,password:string){
    this.firebaseauth.createUserWithEmailAndPassword(email,password).then((res)=>{
      alert("Registration Successfull!!");
      this.router.navigate(['/login']);
      this.sendEmailForVerification(res.user);
    },err=>{
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  //sign out
  logout(){
    this.firebaseauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err=>{
      alert(err.message); 
    })
  }

  //forgot password
  forgotPassword(email:string){
    this.firebaseauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email']);
    },err=>{
      alert("Something Went Wrong");
    })
  }

  //email verification
  sendEmailForVerification(user:any){
    user.sendEmailVerification().then((res:any)=>{
      this.router.navigate(['/verify-email']);
    },(err:any)=>{
      alert("Something Went Wrong!!, Unable To Send Email")
    })
  }
}
