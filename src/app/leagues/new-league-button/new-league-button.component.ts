import { Component, OnInit } from '@angular/core';
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-new-league-button',
  templateUrl: './new-league-button.component.html',
  styleUrls: ['./new-league-button.component.scss']
})
export class NewLeagueButtonComponent implements OnInit {
  public faPlusSquare: IconDefinition = faPlusSquare;

  constructor() { }

  ngOnInit() {
  }

}
