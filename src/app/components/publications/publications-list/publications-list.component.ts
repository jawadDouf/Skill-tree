import { Component } from '@angular/core';
import { PublicationsService } from 'src/app/services/publications/publications.service';


@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.css']
})
export class PublicationsListComponent {

  publications : any;

  constructor(private pubService:PublicationsService){
    
  }

  ngOnInit() {
    //Call load Publications method
    this.loadPublications()
    
  }

  //get all the publications
    loadPublications(){
      return this.pubService.getPublications().subscribe((res)=>{
            this.publications = res;     
      })
   }
  
}
