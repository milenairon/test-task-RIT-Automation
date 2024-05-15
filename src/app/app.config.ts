import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

// компоненты, которые сопоставляются с маршрутами
import { PlanetsComponent } from './components/planets/planets.component';
import { PeopleComponent } from './components/people/people.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'planets', redirectTo: '/' },
  { path: 'people', component: PeopleComponent },
  { path: '**', component: NotFoundComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideClientHydration(), provideHttpClient()],
};
