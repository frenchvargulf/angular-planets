import { EventEmitter, Injectable, ɵConsole } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Character } from "./character.model";
import { Observable, zip } from "rxjs";
import { map, mergeMap, tap } from "rxjs/operators";
import { chain, curry } from "lodash";
import { environment } from "../environments/environment.prod";

@Injectable()
export class APIService {
  characterSelected = new EventEmitter<Character>();
  url = environment.apiUrl;
  nextUrl: string;
  prevUrl: string;
  planets: Array<any>;
  number: 10;
  check: false;

  constructor(private http: HttpClient) {}

  show(number) {
    this.number = number;

    return this.http.get<any>(this.url).pipe(
      map(res => {
        if (number == 10) {
          return res.results;
        }
        if (number == 5) {
          this.planets = res.results;
          if (this.check) {
            //@ts-ignore
            this.check = !this.check;
            return [
              this.planets[5],
              this.planets[6],
              this.planets[7],
              this.planets[8],
              this.planets[9]
            ];
          }

          return [
            this.planets[0],
            this.planets[1],
            this.planets[2],
            this.planets[3],
            this.planets[4],
            this.planets[5]
          ];
        }
      })
    );
  }

  getPage(number) {
    //@ts-ignore
    if (this.number === 5) {
      if (number % 2 == 0) {
        number = number - 1;
        //@ts-ignore
        this.check = !this.check;
      }
      if (number % 2 != 0 && number != 1) {
        number = Math.ceil(number / 2);
      }
      let url = `https://swapi.co/api/planets/?page=${number}`;
      return this.http.get<any>(url).pipe(
        map(res => {
          this.planets = res.results;
          if (this.check) {
            //@ts-ignore
            this.check = !this.check;
            return [
              this.planets[5],
              this.planets[6],
              this.planets[7],
              this.planets[8],
              this.planets[9]
            ];
          }

          return [
            this.planets[0],
            this.planets[1],
            this.planets[2],
            this.planets[3],
            this.planets[4]
          ];
        })
      );
    }
    let url = `https://swapi.co/api/planets/?page=${number}`;
    return this.getPlanets(url);
  }

  getNextPlanets() {
    let url = this.nextUrl || this.url;
    return this.getPlanets(url);
  }

  getPrevPlanets() {
    const url = this.prevUrl || this.url;
    return this.getPlanets(url);
  }

  getSearchedPlanets(url: string) {
    return this.http.get<any>(url).pipe(
      tap(res => (this.nextUrl = res.next)),
      map(res => res.results),
      mergeMap(
        chars =>
          zip(
            ...chain(chars)
              .map(char => [char.residents, char.films])
              .flattenDeep()
              .uniq()
              .map(residents => this.http.get(residents))
              .value()
          ),
        (chars, responses) =>
          chars.map(char => {
            const findFunc = curry(
              (targetUrl, obj) => obj["url"] === targetUrl
            );
            const residents = char.residents.map(residentsUrl =>
              responses.find(findFunc(residentsUrl))
            );
            const films = char.films.map(filmsUrl =>
              responses.find(findFunc(filmsUrl))
            );
            return Object.assign(char, { residents, films });
          })
      )
    );
  }

  getPlanets(url: string): Observable<Character[]> {
    this.url = "";
    this.url = url;
    return this.http.get<any>(url).pipe(
      tap(res => (this.nextUrl = res.next)),
      map(res => {
        return res.results;
      }),
      mergeMap(
        chars =>
          zip(
            ...chain(chars)
              .map(char => [char.residents, char.films])
              .flattenDeep()
              .uniq()
              .map(residents => this.http.get(residents))
              .value()
          ),
        (chars, responses) =>
          chars.map(char => {
            const findFunc = curry(
              (targetUrl, obj) => obj["url"] === targetUrl
            );
            const residents = char.residents.map(residentsUrl =>
              responses.find(findFunc(residentsUrl))
            );
            const films = char.films.map(filmsUrl =>
              responses.find(findFunc(filmsUrl))
            );
            return Object.assign(char, { residents, films });
          })
      )
    );
  }
  
}
