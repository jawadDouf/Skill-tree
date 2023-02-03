import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  baseUrl:string = "http://localhost:8080/api";

  isLoggedIn:boolean=false;

  constructor(private http:HttpClient) { }

  //Login Method
  login(email:string,password:string) : Observable<any>{
      return this.http.post(this.baseUrl + "/authentification/login",{
        email:email,
        password:password
      })
  }

  register(first_name:string,last_name:string,email:string,password:string,adresse:string,phone_number:string) :Observable<any>{
      return this.http.post(this.baseUrl+"/authentification/register",{
        email:email,
        password:password,
        first_name:first_name,
        phone_number:phone_number,
        adresse:adresse,
        last_name:last_name
      })
  }
  
}
