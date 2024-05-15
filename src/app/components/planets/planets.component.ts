import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { Planet } from './planet';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css',
})
export class PlanetsComponent implements OnInit {
  planets: Array<Planet> = [];
  constructor(private location: Location) {}

  // navigateToPeople() {
  //   this.location.go('/people').replace();
  // }

  ngOnInit() {
    // this.planetsService
    // .getplanets()
    // .subscribe(planet => {
    //   this.planet = planet;
    // })

    this.planets = [
      {
        name: 'Tatooine',
        rotation_period: '23',
        orbital_period: '304',
        diameter: '10465',
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        surface_water: '1',
        population: '200000',
        created: '2014-12-09T13:50:49.641000Z',
        edited: '2014-12-20T20:58:18.411000Z',
        url: 'https://swapi.dev/api/planets/1/',
      },
      {
        name: 'Alderaan',
        rotation_period: '24',
        orbital_period: '364',
        diameter: '12500',
        climate: 'temperate',
        gravity: '1 standard',
        terrain: 'grasslands, mountains',
        surface_water: '40',
        population: '2000000000',
        created: '2014-12-10T11:35:48.479000Z',
        edited: '2014-12-20T20:58:18.420000Z',
        url: 'https://swapi.dev/api/planets/2/',
      },
      {
        name: 'Yavin IV',
        rotation_period: '24',
        orbital_period: '4818',
        diameter: '10200',
        climate: 'temperate, tropical',
        gravity: '1 standard',
        terrain: 'jungle, rainforests',
        surface_water: '8',
        population: '1000',
        created: '2014-12-10T11:37:19.144000Z',
        edited: '2014-12-20T20:58:18.421000Z',
        url: 'https://swapi.dev/api/planets/3/',
      },
      {
        name: 'Hoth',
        rotation_period: '23',
        orbital_period: '549',
        diameter: '7200',
        climate: 'frozen',
        gravity: '1.1 standard',
        terrain: 'tundra, ice caves, mountain ranges',
        surface_water: '100',
        population: 'unknown',
        created: '2014-12-10T11:39:13.934000Z',
        edited: '2014-12-20T20:58:18.423000Z',
        url: 'https://swapi.dev/api/planets/4/',
      },
      {
        name: 'Dagobah',
        rotation_period: '23',
        orbital_period: '341',
        diameter: '8900',
        climate: 'murky',
        gravity: 'N/A',
        terrain: 'swamp, jungles',
        surface_water: '8',
        population: 'unknown',
        created: '2014-12-10T11:42:22.590000Z',
        edited: '2014-12-20T20:58:18.425000Z',
        url: 'https://swapi.dev/api/planets/5/',
      },
    ];
  }
}
