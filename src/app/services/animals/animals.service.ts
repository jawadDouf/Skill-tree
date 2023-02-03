import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  baseUrl:string = "http://localhost:8080/api";


  constructor(private http:HttpClient){
    
  }

  //Get animals of a specific user
  getAnimalsByPersonId(id:number) : Observable<any>{
    return this.http.get(this.baseUrl + "/animals/myAnimals/" + id);
  }

  //Post an animal
  createAnimal(name2:string,age2:number,description2:string,type2:string) : Observable<any>{
    return this.http.post(this.baseUrl + '/animals', {
      name:name2,
      age:age2,
      description:description2,
      originalOwnerId:localStorage.getItem('userId'),
      type:type2  
  },{
    headers:new HttpHeaders(
    {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
  )
  });
  }

  //Delete an animal
  deleteAnimal(animalId:number): Observable<any>{
    return this.http.delete(this.baseUrl + "/animals/one/" + animalId,{
      headers:new HttpHeaders(
      {
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    )
    });
  }

  //Get One animal by id
  getOneAnimal(animalId:number):Observable<any>{
    return this.http.get(this.baseUrl + "/animals/one/" + animalId);
  }

  //Update one animal
  updateAnAnimal(name:string,age:number,description:string,type:string,animalId:number){
    return this.http.put(this.baseUrl + "/animals/one/" + animalId,{
      name:name,
      age:age,
      description:description,
      originalOwnerId:localStorage.getItem('userId'),
      type:type  
    },{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )

    })
  }

  //Get the last inserted animal
  getLastAnimal():Observable<any>{
    return this.http.get(this.baseUrl + '/comments/last');
  }
}
