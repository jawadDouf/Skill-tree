import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentsServiceService {

  baseUrl:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    })
  };
  //Post a comment
  postComment(body:string,pubId:number):Observable<any>{
    return this.http.post('http://localhost:8080/api/comments/add', {
      body:body,
      publicationId:pubId,
      personId:localStorage.getItem('userId')
    },this.httpOptions);
  }
  

  //Get the last cooment
  getLastComment():Observable<any>{
    return this.http.get(this.baseUrl + '/comments/last');
  }

  //Get all comments by publicationid
  getAllCommentOfPublication(pubId:number):Observable<any>{
    return this.http.get(this.baseUrl + '/comments/' + pubId);
  }
}
