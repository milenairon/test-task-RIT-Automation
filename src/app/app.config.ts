import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

// компоненты, которые сопоставляются с маршрутами
import { PlanetsComponent } from './components/planets/planets.component';
import { PeopleComponent } from './components/people/people.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'people', component: PeopleComponent },
  { path: '**', component: NotFoundComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)],
};
