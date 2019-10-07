import { Component, OnInit, Input } from "@angular/core";
import { Planet } from "../planet";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { PlanetService } from "../planet.service";
@Component({
  selector: "app-planet-detail",
  templateUrl: "./planet-detail.component.html",
  styleUrls: ["./planet-detail.component.css"]
})
export class PlanetDetailComponent implements OnInit {
  @Input() planet: Planet;
  planetDet: object;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    const planet1 = this.route.snapshot.params.name;
    this.planetService.getPlanets().subscribe(planet => {
      planet.map(planet => {
        // @ts-ignore
        if (planet1 === planet.name) {
          console.log(planet);
          this.planet = planet;
          return planet;
        }
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
