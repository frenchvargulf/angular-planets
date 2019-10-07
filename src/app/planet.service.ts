import { Injectable } from "@angular/core";
import { Planet } from "./planet";
import { PLANETS } from "./mock-planets.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlanetService {
  allPlanets = [];
  search: Array<any>;

  constructor() {}

  getPlanets(): Observable<Planet[]> {
    this.allPlanets = [];
    PLANETS.map(page => {
      // @ts-ignore
      page.results.map(planet => {
        this.allPlanets.push(planet);
      });
    });
    return of(this.allPlanets);
  }

  getPlanets1(name): Observable<Planet[]> {
    this.allPlanets = [];
    PLANETS.map(page => {
      // @ts-ignore
      page.results.map(planet => {
        if (name === planet.name) {
          this.allPlanets.push(planet);
        }
      });
    });

    console.log(this.allPlanets);
    return of(this.allPlanets);
  }
}
