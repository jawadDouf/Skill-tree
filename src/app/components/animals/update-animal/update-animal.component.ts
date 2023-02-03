import { Component, Input } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals/animals.service';


@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent {

  name:string="";
  animalAge:any=0;
  animalDescription:string="";
  animalType:string="";
  @Input() animalId: any;
  constructor(private animalService:AnimalsService){

  }

  ngOnInit(){
    this.getAnimalById(this.animalId);
  }
  //Get one animal by id
  getAnimalById(animalId:number){
    this.animalService.getOneAnimal(animalId).subscribe((res)=>{
       this.name = res.name;
       this.animalAge = res.age;
       this.animalDescription=res.description;
       this.animalType=res.type;
    })
  }

  //Post an animal
  updateAnimal(){
    this.animalService.updateAnAnimal(this.name,this.animalAge,this.animalDescription,this.animalType,this.animalId).subscribe((res)=>{
      console.log(res); 
   });
}
}

