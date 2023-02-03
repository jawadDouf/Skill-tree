import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   //Class required variables
  email:string = "";
  password:string="";

  @Output()
  sendEvent = new EventEmitter();

  constructor(private authService:AuthentificationService,private router:Router){

  }

  

  onSwitch(){
    this.sendEvent.emit();
  }

  onSubmit(loginForm : NgForm){
    //Get The Entered data by the user
    this.email=loginForm.form.value.email;
    this.password=loginForm.form.value.password;
    //Check the entered data
    this.authService.login(this.email,this.password).subscribe((data)=>{
         //Store token and id in localstarage
         localStorage.setItem('token',data.accessToken);
         localStorage.setItem('userId',data.personId);
         //Change Loggendin variable to true
         this.authService.isLoggedIn = true;
         //Redirect to profile page
         if(localStorage.getItem('token')){
           this.router.navigate(["profile/" + data.personId]);
         }
         
    }) 
    
  }
}
