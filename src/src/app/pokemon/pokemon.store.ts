import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { UserResponse, MovieItem } from "../models/news-result";

interface PokemonState {
  Contacts: MovieItem[];
}

@Injectable()

export class PokemonStore extends ComponentStore<PokemonState> {
    constructor() {
        super({Contacts:[]})
    }
    pokemon$: Observable<MovieItem[]> = this.select((state) => state.Contacts)
}