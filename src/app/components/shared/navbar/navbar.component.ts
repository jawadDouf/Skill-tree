import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbarSwitcher:boolean = true;

  constructor(private authService:AuthentificationService){

  }

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.navbarSwitcher=false;
    }
  }

  logout(){
    localStorage.clear();
  }
}
