import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  baseUrl:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    })
  };

  //Post images of animal
  createAnimalImages(animal_id:number,image:any) : Observable<any>{
    return this.http.post("http://localhost:8080/api", {
      name:image,
      type:"j",
      personId:0,
      animalId:animal_id
  },this.httpOptions);
  }

  //Post images of person
  createPersonImage(person_id:number,image:any) : Observable<any>{
    return this.http.post(this.baseUrl + '/files/' + person_id, {
      name:image.name,
      type:"j",
      personId:person_id,
      animalId:0
  },{
    headers:new HttpHeaders(
    {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  )
  });
  }

  //Get pictures of an animal
  getImagesOfAnimalById(id:number) : Observable<any>{
    return this.http.get(this.baseUrl + "/files/byanimal/" + id);
  }



}
