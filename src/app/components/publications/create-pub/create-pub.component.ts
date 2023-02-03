import { Component, Input } from '@angular/core';
import { PublicationServiceService } from 'src/app/services/publications/publication-service.service';

@Component({
  selector: 'app-create-pub',
  templateUrl: './create-pub.component.html',
  styleUrls: ['./create-pub.component.css']
})
export class CreatePubComponent {
  
  startDate:string="";
  endDate:string="";
  pubDescription:string="";
  @Input() animalId:any;

  constructor(private publicationService:PublicationServiceService){}



  //Post Publication
  createPublication(){
    console.log(this.startDate);
    console.log(this.endDate);
    this.publicationService.postPublication(this.startDate,this.pubDescription,this.endDate,this.animalId).subscribe((res)=>{
      console.log(res); 
   });
  }





 
}
