import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ToheadingComponent } from './toheading/toheading.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: ToheadingComponent },
  { path: 'detail-movie/:id', component: MovieDetailComponent },
  {path:'users', component: PokemonComponent},
  {path:'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
