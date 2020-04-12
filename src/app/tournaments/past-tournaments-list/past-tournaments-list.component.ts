import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-past-tournaments-list',
  templateUrl: './past-tournaments-list.component.html',
  styleUrls: ['./past-tournaments-list.component.scss']
})
export class PastTournamentsListComponent implements OnInit {
  @Input() format?: string;

  constructor() { }

  ngOnInit() {
  }

}
