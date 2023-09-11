import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  userNameFC = new FormControl("");
  passwordFC = new FormControl("");

  constructor() {}

  showModal = false;

  handleClick() {
    this.showModal = true;
  }
}
