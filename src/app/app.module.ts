import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { NofoundComponent } from './nofound/nofound.component';
import { MoviesdetailComponent } from './moviesdetail/moviesdetail.component';
//import { MovieslistComponent } from './movieslist/movieslist.component';
//import { MoviesaddComponent } from './moviesadd/moviesadd.component';
//import { UsersaddComponent } from './usersadd/usersadd.component';
//import { UsersdetailComponent } from './usersdetail/usersdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    CharactersComponent,
    MoviesComponent,
    LoginComponent,
    NofoundComponent,
    MoviesdetailComponent,
    //MovieslistComponent,
    //MoviesaddComponent,
    //UsersaddComponent,
    //UsersdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
