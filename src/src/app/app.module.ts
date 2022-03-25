import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ComponentStore } from "@ngrx/component-store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToheadingComponent } from "./toheading/toheading.component";

import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { UserComponent } from "./user/user.component";
import { RegisterComponent } from "./register/register.component";
import { RegisterDetailComponent } from "./register-detail/register-detail.component";
import { MovieStoreComponent } from "./movie-store/movie-store.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterStore } from "./register/register.store";

@NgModule({
  declarations: [
    AppComponent,
    ToheadingComponent,
    MovieDetailComponent,
    PokemonComponent,
    UserComponent,
    RegisterComponent,
    RegisterDetailComponent,
    MovieStoreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [ComponentStore, RegisterStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
