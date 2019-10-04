import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../character.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  @Input() character: Character;

  ngOnInit() {}
}
