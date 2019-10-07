import { Component, OnInit } from "@angular/core";

import { Planet } from "../planet";

import { PlanetService } from "../planet.service";
import { PlanetsAPIService } from "../planets-api.service";

import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  length = 61;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  planets: Planet[];
  pageIndex = 1;
  dataAPI = [];
  allPlanets = [];

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

  url = [
    "https://swapi.co/api/planets/?page=1",
    "https://swapi.co/api/planets/?page=2",
    "https://swapi.co/api/planets/?page=3",
    "https://swapi.co/api/planets/?page=4",
    "https://swapi.co/api/planets/?page=5",
    "https://swapi.co/api/planets/?page=6",
    "https://swapi.co/api/planets/?page=7"
  ];

  constructor(
    private planetService: PlanetService,
    private apiService: PlanetsAPIService
  ) {}

  getPlanets(): void {
    this.planetService
      .getPlanets()
      .subscribe(planets => (this.planets = planets));
  }

  getPlanets1(url): void {
    this.apiService.getPlanets(url).subscribe(planets => {
      console.log(this.dataAPI);
      this.dataAPI.push(planets);

      if (this.dataAPI.length == 7) {
        this.dataAPI.map(page => {
          page.results.map(result => {
            this.allPlanets.push(result);
          });
        });
      }

      if (this.allPlanets.length == 61) {
        return (this.planets = this.allPlanets);
      }
    });
  }

  ngOnInit() {
    this.getPlanets();

    this.url.map(url => {
      this.getPlanets1(url);
    });
  }
}
