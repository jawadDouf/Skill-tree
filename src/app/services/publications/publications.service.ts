import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  
  baseUrl:string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }


  //Bring All the publications available
  getPublications() : Observable<any>{
    return this.http.get(this.baseUrl + "/publications");
  }

  //Get Publication by Id
  getPublicationById(id : number) : Observable<any>{
    return this.http.get(this.baseUrl + "/publications/one/" + id);
  }
}
