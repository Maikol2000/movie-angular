import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { MovieItem } from "../models/news-result";
import { ServiceService } from "./service/service.service";

interface MovieState {
  movies: MovieItem[];
  searchString: string;
  name: string;
}

@Injectable()
export class MoviesStore extends ComponentStore<MovieState> {
  constructor(private movieResponse: ServiceService) {
    super({
      movies: [
        {
          name: "Bibbye Gutcher",
          phone: "885-131-9176",
        },
        {
          name: "Gabbie Haslegrave",
          phone: "541-172-6277",
        },
        {
          name: "Catie Nettleship",
          phone: "201-539-6873",
        },
        { name: "Mahalia Sones", phone: "535-669-7499" },
        {
          name: "Lia Yurmanovev",
          phone: "381-531-3649",
        },
        {
          name: "Daisy Simonel",
          phone: "890-576-1438",
        },
        { name: "Bobby Coller", phone: "129-638-2410" },
        {
          name: "Peri Hockey",
          phone: "290-234-4247",
        },
        {
          name: "Cordie Crosscombe",
          phone: "907-576-1311",
        },
        {
          name: "Rodrigo Alexsandrovich",
          phone: "799-587-4536",
        },
        {
          name: "Hortensia Fishleigh",
          phone: "434-950-3630",
        },
        {
          name: "Atlante Rait",
          phone: "445-521-0518",
        },
        {
          name: "Marysa Bartolomeoni",
          phone: "256-694-5017",
        },
        {
          name: "Gussi Albasiny",
          phone: "444-436-5627",
        },
        {
          name: "Betsey Kears",
          phone: "280-992-9432",
        },
        {
          name: "Conni Marzellano",
          phone: "425-276-4741",
        },
        {
          name: "Natalina Burnsides",
          phone: "826-545-7370",
        },
        {
          name: "Scarface Samet",
          phone: "606-139-9514",
        },
        {
          name: "Shelley Riglar",
          phone: "822-991-7728",
        },
        {
          name: "Judon Keen",
          phone: "539-279-0970",
        },
      ],
      searchString: "",
      name: "",
    });
  }
  
  // list movie
  movies$: Observable<MovieItem[]> = this.select((state) => state.movies);

  // filter movie
  filterMovies$: Observable<MovieItem[]> = this.select(
    ({ movies, searchString }) =>
      movies.filter((movie) =>
        movie.name
          .toLocaleLowerCase()
          .includes(searchString.toLocaleLowerCase())
      )
  );

  //add movie
  addMovie = this.updater((state, newMovie: MovieItem) => ({
    ...state,
    movies: [newMovie, ...state.movies],
  }));
  //delete
  deleteMovie = this.updater((state, deleteMovie: MovieItem) => {
    const movieCopy = [...state.movies]
    const idx = movieCopy.findIndex((m) => m.name == deleteMovie.name)
    // console.log(idx)
    movieCopy.splice(idx, 1)
    return {
      ...state,
      movies: movieCopy
    }
  });
}
