// @ts-ignore

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { PublicationServiceService } from 'src/app/services/publications/publication-service.service';

@Component({
  selector: 'app-first-compo',
  templateUrl: './first-compo.component.html',
  styleUrls: ['./first-compo.component.css']
})
export class FirstCompoComponent {

    title:String = "comoponentOne";
    paragraph:String = "Dynamic variable";
    publications : any;
   
    constructor(public publicationService : PublicationServiceService) {
       
    }

    

  ngOnInit() {
    //Call load Publications method
    this.loadPublications()
    //Call load publication by id method
    this.loadOnePublication();
  }

  //Access get all publications method in the service
  loadPublications(){
    return this.publicationService.getPublications().subscribe((res)=>{
          this.publications = res;     
    })
  }

  //Load One Publication
  loadOnePublication(){
    return this.publicationService.getPublicationById(1).subscribe((res)=>{
      console.log(res);
    })
  }

  }

  

  
