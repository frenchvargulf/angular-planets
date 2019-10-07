import { Injectable } from "@angular/core";
import { Planet } from "./planet";
import { HttpClient } from "@angular/common/http";
import { Observable, zip } from "rxjs";
import { map, mergeMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlanetsAPIService {
  url = "https://swapi.co/api/planets/?page=1";
  searchUlr = `https://swapi.co/api/planets`;
  planets: Array<any>;
  isLoaded = false;
  data: [];
  searchResult: Array<any>;

  constructor(private http: HttpClient) {}
  searchPlanets(term: string): Observable<Planet[]> {
    if (!term.trim()) {
      return null;
    }
    return this.http.get<Planet[]>(`${this.searchUlr}/?search=${term}`).pipe(
      map(res => {
        // @ts-ignore
        return res.results;
      })
    );
  }

  searchOnePlanet(term: string) {
    return this.http.get<Planet[]>(`${this.searchUlr}/?search=${term}`).pipe(
      map(res => {
        // @ts-ignore
        return res.results;
      })
    );
  }

  getPlanets(url): Observable<Planet[]> {
    return this.http.get<any>(url).pipe(
      map(res => {
        this.planets = res;
        return res;
      })
    );

    // })
  }
}
