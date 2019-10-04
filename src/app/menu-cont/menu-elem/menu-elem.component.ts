import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../../character.model";
import { APIService } from "../../StarwarsCharacter.service";

@Component({
  selector: "app-menu-elem",
  templateUrl: "./menu-elem.component.html",
  styleUrls: ["./menu-elem.component.scss"]
})
export class MenuElemComponent implements OnInit {
  @Input() character: Character;
  @Input() isActive = false;
  show = false;

  constructor(private apiService: APIService) {}

  ngOnInit() {}

  onSelected() {
    this.apiService.characterSelected.emit(this.character);
  }
}
