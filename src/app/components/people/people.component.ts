import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { People } from './people';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent implements OnInit {
  people: Array<People> = [];
  constructor(private _location: Location) {}

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    // this.peopleService
    // .getpeople()
    // .subscribe(people => {
    //   this.people = people;
    // })

    this.people = [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/6/',
        ],
        species: [],
        vehicles: [
          'https://swapi.dev/api/vehicles/14/',
          'https://swapi.dev/api/vehicles/30/',
        ],
        starships: [
          'https://swapi.dev/api/starships/12/',
          'https://swapi.dev/api/starships/22/',
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.dev/api/people/1/',
      },
      {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/4/',
          'https://swapi.dev/api/films/5/',
          'https://swapi.dev/api/films/6/',
        ],
        species: ['https://swapi.dev/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:10:51.357000Z',
        edited: '2014-12-20T21:17:50.309000Z',
        url: 'https://swapi.dev/api/people/2/',
      },
    ];
  }
}
