import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-active-tournaments-list',
  templateUrl: './active-tournaments-list.component.html',
  styleUrls: ['./active-tournaments-list.component.scss']
})
export class ActiveTournamentsListComponent implements OnInit {
  @Input() format?: string;

  constructor() { }

  ngOnInit() {
  }

}
