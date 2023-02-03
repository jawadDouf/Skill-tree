import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { ComentsServiceService } from 'src/app/services/comments/coments-service.service';
import { FilesService } from 'src/app/services/files/files.service';
import { PublicationServiceService } from 'src/app/services/publications/publication-service.service';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {

  @Input() publication:any;
  commentsSwitcher:boolean=false;
  animalInfo:Boolean=false;
  userInfo:Boolean=false;
  DateInfo:Boolean=false;
  commentToSend:string="";
  @Input() deletebutt=false;
  images:any;
  commentsOfPublictions:any;


  constructor(private authentification:AuthentificationService
    ,private router:Router
    ,private commentService:ComentsServiceService
    ,private publicationService:PublicationServiceService
    ,private filesService:FilesService){

  }

  ngOnInit(){
    this.loadImages(this.publication.animal_id);
    this.commentsOfPublictions = this.publication.comments_dtos;
  }
  
  //CommentSwitcher
  switcheComments(){
    this.commentsSwitcher = !this.commentsSwitcher;
  }

  //Switchers
  switchAnimalInfos(){
    this.animalInfo=!this.animalInfo;
  }
  switchPersonInfos(){
    this.userInfo=!this.userInfo;
  }
  switchDateInfo(){
    this.DateInfo=!this.DateInfo;
  }

  //On Comment
  comment(pubId:number){
    if(localStorage.getItem('token') || this.authentification.isLoggedIn){
       this.commentService.postComment(this.commentToSend,pubId).subscribe({
        next:(res)=>{
       },error:()=>{
        this.commentToSend = "";
       },
        complete: () => { 
        }
       }
        
       )
       
       this.publication.comments_dtos.push(this.commentService.getLastComment().subscribe((res)=>{
        console.log( this.publication.comments_dtos);
        
      }))
    }else{
       this.router.navigate(["authentification"]);
    }
  }

  //Delete Publication
  deletePub(pubId:number,event:any){
    this.publicationService.deletePublicationById(pubId).subscribe(
      {
        next:(res)=>{},
        error:()=>{
          event.target.parentElement.parentElement.parentElement.parentElement.remove();
        },
        complete:()=>{
        }
      }
      )
  }

  //Load images of publications
  loadImages(animal_id:number){
    this.filesService.getImagesOfAnimalById(animal_id).subscribe((res)=>{
      console.log(res);
      this.images = res;
    })
  }
}
