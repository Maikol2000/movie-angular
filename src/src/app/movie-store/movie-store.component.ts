import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MovieItem } from "../models/news-result";
import { MoviesStore } from "./movie.store";

@Component({
  selector: "app-movie-store",
  templateUrl: "./movie-store.component.html",
  styleUrls: ["./movie-store.component.scss"],
  providers: [MoviesStore],
})
export class MovieStoreComponent implements OnInit {
  movieForm!: FormGroup;
  constructor(
    private movieStore: MoviesStore, // private readonly componentStore: ComponentStore<{ movie: Movie[] }>,
    private fb: FormBuilder
  ) {
    this.movieForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
    this.movieForm = this.fb.group(
      {
        name : ['', Validators.required],
        phone : ['', Validators.required],
      });
  }

  movies$ = this.movieStore.filterMovies$;

  searchMovies(target: EventTarget | null) {
    // input
    const value = (target as HTMLInputElement).value;

    // select
    //const value = (target as HTMLSelectElement).value;
    this.movieStore.patchState({
      searchString: value,
    });
  }

  addMovie() {
    // this.movieForm.valueChanges()
    if (!this.movieForm.valid) return;
    console.log(this,this.movieForm.value)
    // this.movieStore.addMovie({ name: this.name, phone: this.phone });
  }

  deleteMovie(movie: MovieItem) {
    this.movieStore.deleteMovie(movie)
  }
  ngOnInit(): void {}
}
