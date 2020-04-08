import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {
  @Input() slug?: string; // Set when edit
  @Input() format?: string; //Set when new

  constructor() { }

  ngOnInit() {
  }

}
