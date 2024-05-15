import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlanetsApiService {
  constructor(protected http: HttpClient) {}

  getPlanets() {
    return this.http.get('https://swapi.dev/api/planets');
  }

  getPlanet(id: string) {
    return this.http.get('https://swapi.dev/api/planets/' + id);
  }

  getPeople(id: string) {
    return this.http.get('https://swapi.dev/api/people/' + id);
  }
}
