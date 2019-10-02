import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { NofoundComponent } from './nofound/nofound.component';
import { MoviesdetailComponent } from './moviesdetail/moviesdetail.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MoviesaddComponent } from './moviesadd/moviesadd.component';
//import { UsersaddComponent } from './usersadd/usersadd.component';
//import { UsersdetailComponent } from './usersdetail/usersdetail.component';

const routes: Routes = [
	{ path:'', component: CharactersComponent},
	{ path:'login', component: LoginComponent},
	{ path:'movies', component: MoviesComponent},
	{ path:'moviesdetail', component: MoviesdetailComponent},
	{ path:'movieslist', component: MovieslistComponent},
	{ path:'moviesadd', component: MoviesaddComponent},
	//{ path:'usersdetail', component: UsersdetailComponent},
	//{ path:'usersadd', component: UsersaddComponent},*/
	{ path:'**', component:NofoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
