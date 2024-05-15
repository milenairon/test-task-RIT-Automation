import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlanetsApiService } from '../planets/planets-api';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent implements OnInit {
  planet: any;
  humanList: any = [];
  humanZero: string = 'Loading...';

  constructor(
    private route: ActivatedRoute,
    private api: PlanetsApiService,
    private _location: Location
  ) {}
  // Кнопка Назад
  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    // Запрос на url планеты
    this.route.params.subscribe((params) => {
      this.api.getPlanet(params['id']).subscribe((planet: any) => {
        this.planet = planet.residents.map((element: any) => {
          element = this.getPeopleId(element);
          return element; // номер id
        });
      });
    });
    setTimeout(() => {
      if (this.planet.length != 0) {
        // Запрос на url человека
        this.planet.map((id: any) => {
          this.api.getPeople(id).subscribe((human: any) => {
            this.humanList.push(human);
            return this.humanList;
          });
        });
      } else {
        this.humanZero = 'Здесь пока никто не живет...';
      }
    }, 500);
  }

  getPeopleId(people: any) {
    let id = people.split('/').reverse()[1];
    return id;
  }
}
