import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToheadingComponent } from './toheading/toheading.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsMovieService } from './serve/news-movie.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, ToheadingComponent, MovieDetailComponent, PokemonComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewsMovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
