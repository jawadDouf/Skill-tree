import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FirstCompoComponent } from './components/publications/first-compo/first-compo.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { AuthentificationComponent } from './components/authentification/authentification/authentification.component';
import { PublicationComponent } from './components/publications/publication/publication.component';
import { CreatePubComponent } from './components/publications/create-pub/create-pub.component';
import { CreateAnimalComponent } from './components/animals/create-animal/create-animal.component';
import { UpdateAnimalComponent } from './components/animals/update-animal/update-animal.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PublicationServiceService } from './services/publications/publication-service.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { RestrictAccessGuardService } from './guards/restrict-access-guard.service';

//Set up the router

const appRouter: Routes = [
  {path:'authentification',component:AuthentificationComponent,canActivate:[AuthGuardService]},
  {path:'publications',component:FirstCompoComponent},
  {path:'profile',component:ProfileComponent,canActivate:[RestrictAccessGuardService]},
  {path:'profile/:id',component:ProfileComponent},
  {path:'mypublications',component:PublicationComponent,canActivate:[RestrictAccessGuardService]},
]

@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent,
    LoginComponent,
    RegisterComponent,
    AuthentificationComponent,
    NavbarComponent,
    PublicationComponent,
    ProfileComponent,
    CreatePubComponent,
    CreateAnimalComponent,
    PublicationComponent,
    UpdateAnimalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [PublicationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
