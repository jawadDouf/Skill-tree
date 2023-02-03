import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl:string = "http://localhost:8080/api";


  constructor(private http:HttpClient){
    
  }

  //Get User By Id
  getUserById(id : number) : Observable<any>{
    return this.http.get(this.baseUrl + "/person/" + id);
  }
}
