import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import {Planet } from '../planet';
import { PlanetService } from '../planet.service';
import { PlanetsAPIService } from '../planets-api.service';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: [ './planet-search.component.css' ]
})
export class PlanetSearchComponent implements OnInit {
  planets$: Observable<Planet[]>;
  results$: Observable<Planet[]>;
  private searchTerms = new Subject<string>();
  mock = true;

  constructor(private planetService: PlanetService, private apiService: PlanetsAPIService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
    this.searchAPIPlanet(term)
  }

  searchAPIPlanet(term) {
    this.apiService.searchOnePlanet(term)
  }

  searchMockPlanet() {
    this.results$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
          return this.planetService.getPlanets1(term)
        }
      )
    )
  }

  ngOnInit(): void {
    this.searchMockPlanet()
  }
   
}




