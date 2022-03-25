import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieStoreComponent } from "./movie-store/movie-store.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { RegisterDetailComponent } from "./register-detail/register-detail.component";
import { RegisterComponent } from "./register/register.component";
import { ToheadingComponent } from "./toheading/toheading.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "", component: ToheadingComponent },
  { path: "detail-movie/:id", component: MovieDetailComponent },
  { path: "users", component: PokemonComponent },
  { path: "user", component: UserComponent },
  { path: "register-subject", component: RegisterComponent },
  { path: "register-detail/:id", component: RegisterDetailComponent },
  { path: "movie", component: MovieStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
