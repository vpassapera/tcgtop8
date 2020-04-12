import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-upcoming-tournaments-list',
  templateUrl: './upcoming-tournaments-list.component.html',
  styleUrls: ['./upcoming-tournaments-list.component.scss']
})
export class UpcomingTournamentsListComponent implements OnInit {
  @Input() format?: string;

  constructor() { }

  ngOnInit() {
  }

}
