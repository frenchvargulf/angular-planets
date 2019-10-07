import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PLANETS } from '../mock-planets.service';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})

export class PlanetsComponent implements OnInit {
  // planets = PLANETS;
  selectedPlanet: Planet;
  planets: Planet[];
  
  // onSelect(planet: Planet): void {
  //   this.selectedPlanet = planet;
  // }

  constructor(private planetService : PlanetService  ) { }

  getPlanets(): void {
    this.planetService.getPlanets()
      .subscribe(planets => this.planets = planets);
  }

  ngOnInit() {
    this.getPlanets();
  }

}
