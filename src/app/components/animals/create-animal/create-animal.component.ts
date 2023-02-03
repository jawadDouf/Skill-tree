import { Component, Input } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals/animals.service';
import { FilesService } from 'src/app/services/files/files.service';


@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent {

  name:string="";
  animalAge:any=0;
  animalDescription:string="";
  animalType:string="";
  selectedImage:any;
  selectedImage2:any;
  selectedImage3:any;
  pics:any=[];
  animalId: any;
  secondPart:any=false;

  constructor(private animalService:AnimalsService,
    private filesService:FilesService){

  }


  //Post an animal
  createAnimal(){
    //Insert a new animal
    this.animalService.createAnimal(this.name,this.animalAge,this.animalDescription,this.animalType).subscribe(
      {
        next:(res)=>{
           console.log(res);
        },
        error:()=>{
           
        } 
      }
      );
    this.name="";
    this.animalAge=0;
    this.animalDescription="";
    this.animalType="";
    this.secondPart=true;

    this.animalService.getLastAnimal().subscribe((res)=>{
      this.animalId = res.id;
      console.log(res);
      
    });
  }

  //Add images
  addImages(){
    for (let index = 0; index < 1; index++) {
      if(this.pics[index]){
        console.log(this.pics[index]);
        this.filesService.createAnimalImages(this.animalId,this.pics[index])
      }else{
      } 
    } 
  }

  onFileChanged(event:any){
    this.pics.push(event.target.files[0].name);
  }

  selectedValue(event:any){
    this.animalType = event.target.value;
    
  }
}
