import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Planet } from './planet';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

import { PlanetsApiService } from './planets-api';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css',
})
export class PlanetsComponent implements OnInit {
  planets: any[] = [];

  constructor(private api: PlanetsApiService) {}

  ngOnInit(): void {
    this.api.getPlanets().subscribe((data: any) => {
      this.planets = data.results.map((element: any) => {
        element.id = this.getPlanetId(element.url);
        return element;
      });
    });
  }

  getPlanetId(planet: any) {
    let id = planet.split('/').reverse()[1];
    return id;
  }
}
