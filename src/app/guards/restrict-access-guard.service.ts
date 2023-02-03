import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from '../services/authentification/authentification.service';


@Injectable({
  providedIn: 'root'
})
export class RestrictAccessGuardService {

  constructor(private authService:AuthentificationService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isLoggedIn || localStorage.getItem('token')){
      return true;
    }else{
      this.router.navigate(["authentification"]);
      return false;
    }
  }
}
