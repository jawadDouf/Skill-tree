import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable()
export class PublicationServiceService {
   
  baseUrl:string = "http://localhost:8080/api";


  constructor(private http:HttpClient){
    
  }

  //Headers 
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

  //Bring All the publications available
  getPublications() : Observable<any>{
    return this.http.get(this.baseUrl + "/publications");
  }

  //Get Publication by Id
  getPublicationById(id : number) : Observable<any>{
    return this.http.get(this.baseUrl + "/publications/one/" + id);
  }

  //Get publications of a user
  getPublicationByUserId(id : any) : Observable<any>{
    return this.http.get(this.baseUrl + "/publications/person/" + id);
  }

  //Post a publication
  postPublication(startDate:string,description:string,endDate:string,animalId:number):Observable<any>{
    return this.http.post('http://localhost:8080/api/publications', {
        start_date:startDate,
        publication_description:description,
        end_date:endDate,
        personId:localStorage.getItem('userId'),
        animalId:animalId  
    },{
      headers:new HttpHeaders(
      {
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    )
    });
  }

  //Delete a publication
  deletePublicationById(id : number) : Observable<any>{
    console.log(`Bearer ${localStorage.getItem('token')}`);
    
    return this.http.delete(this.baseUrl + "/publications/one/" + id,{
      headers:new HttpHeaders(
      {
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    )
    });
  }

  
}
