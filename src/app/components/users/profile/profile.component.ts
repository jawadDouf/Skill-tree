import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from 'src/app/services/animals/animals.service';
import { UsersService } from 'src/app/services/users/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userId:any;
  user:any;
  animals:any;
  formSwitcher:Boolean=false;
  anId:any;
  formSwitcher2:Boolean=false;
  formSwitcher3:Boolean=false;
  modifyIcons:Boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
    private usersService:UsersService,
    private animalsService:AnimalsService){

  }


  ngOnInit(){
    //Check if the login user or external link
    if(this.activatedRoute.snapshot.paramMap.get('id')){
      this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    }else{
      this.userId = localStorage.getItem('userId');
    }

    //Appearance of modify icons
    if(this.userId === localStorage.getItem('userId')){
      this.modifyIcons = true;
    }else{
      this.modifyIcons=false;
    }
    //Get the user
    this.loadUser();
    //Get The animals
    this.loadAnimalsOfUser();
  
  }


  //Get The user
  loadUser(){
    return this.usersService.getUserById(this.userId).subscribe((res)=>{
          this.user = res;     
    })
  }

  //Get animals of the user
  loadAnimalsOfUser(){
    return this.animalsService.getAnimalsByPersonId(this.userId).subscribe((res)=>{
      console.log(this.animals);
      
      this.animals = res;     
})
  }


  switchForm(id:number){
    if(this.modifyIcons){
      this.anId = id;
      this.formSwitcher= !this.formSwitcher;
    }
  }
  switchForm3(id:number){
      this.anId = id;
      this.formSwitcher3= !this.formSwitcher3;
  }
  switchForm2(){
    this.formSwitcher2 = !this.formSwitcher2;
  }

  
  //Delete Publication
  deleteAnimal(animald:number,event:any){
    this.animalsService.deleteAnimal(animald).subscribe(
      {
        next:(res)=>{
            
        },
        error:()=>{
          event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
      }
      )
  }
  

  

}
