import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // get Pokemon

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10');
  }

}




