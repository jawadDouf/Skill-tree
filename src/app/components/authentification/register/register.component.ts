import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm , NgModel} from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  

  firstName:string="";
  lastName:string="";
  adresse:string="";
  phoneNumber:string="";
  email:string = "";
  password:string="";

  @Output()
  sendEvent = new EventEmitter();

  constructor(private authService:AuthentificationService){
  }

  onSwitch(){
    this.sendEvent.emit();
  }

  onSubmit(){
    //Register the user
    this.authService.register(this.firstName,this.lastName,this.email,this.password,this.adresse,this.phoneNumber).subscribe();
    this.onSwitch();
  }
}
