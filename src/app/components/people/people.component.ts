import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlanetsApiService } from '../planets/planets-api';
import { InputRadioComponent } from '../input-radio/input-radio.component';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    InputRadioComponent,
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent implements OnInit {
  planet: any;
  humanList: any = [];
  humanZero: string = 'Loading...';
  gender: string = 'all';

  constructor(
    private route: ActivatedRoute,
    private api: PlanetsApiService,
    private _location: Location
  ) {}
  // Кнопка Назад
  backClicked() {
    this._location.back();
  }

  apiFunction() {
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
            if (human.gender !== this.gender) {
              this.humanList.push(human);
              return this.humanList;
            } else {
              this.humanZero = 'Никого не найдено';
            }
          });
        });
      } else {
        this.humanZero = 'Здесь пока никто не живет...';
      }
    }, 500);
  }

  ngOnInit(): void {
    this.apiFunction();
  }

  getPeopleId(people: any) {
    let id = people.split('/').reverse()[1];
    return id;
  }

  handleChangeGender(gender: string) {
    this.humanZero = 'Loading...';
    this.gender = gender;
    this.humanList = [];
    this.apiFunction();
  }
}
