import { Component, OnInit, Input } from "@angular/core";
import { APIService } from "./StarwarsCharacter.service";
import { Character } from "./character.model";
import { PlanetsService } from "./mock.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [APIService, PlanetsService]
})
export class AppComponent implements OnInit {
  title = "app";
  planets: Array<object>;
  @Input() selectedCharacter: Character;

  constructor(
    private apiService: APIService,
    private planetsService: PlanetsService
  ) {}

  ngOnInit() {
    this.apiService.characterSelected.subscribe(
      (character: Character) => {
        this.selectedCharacter = character;
      }
    );
    this.planetsService.get().subscribe(res => {
      this.planets = res;
    });
  }
}
