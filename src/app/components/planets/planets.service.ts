// import { Injectable } from '@angular/core';
// import { Planet } from './planet';
// import { Observable, zip } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { of } from 'rxjs';
// import { catchError, finalize } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// @Injectable()
// export class PlanetService {
//   constructor(private http: HttpClient) {}

//   getPlanet(): Observable<Planet[]> {
//     return this.http.get('https://swapi.dev/api/planets/').pipe(
//       map((res: any) => {
//         console.log(res);
//       })
//     );

//     // .map(this.toJSON)
//     // .catch(this.handleError);
//   }
//   // private toJSON(res: Response) {
//   //   const json = res.json();
//   //   return json.results || json.data;
//   // }

//   private handleError(error: any) {
//     console.log(error);
//     return throwError(() => new Error('Your error'));
//   }
//   // getPersonImageUrl(query: string): Observable<any[]> {
//   //   return this.http
//   //              .get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
//   //              .map(this.toJSON)
//   //              .catch(this.handleError);
//   // }

//   // searchPeople(query: string): Observable<any[]> {
//   //   return this.http
//   //              .get(`https://swapi.co/api/people/?search=${query}`)
//   //              .map(this.toJSON)
//   //              .catch(this.handleError);
//   // }

//   // private toJSON(res: Response) {
//   //   const json = res.json();
//   //   return json.results || json.data;
//   // }

//   // private handleError(error) {
//   //   console.log(error);
//   //   return Observable.throw(error);
//   // }
// }
