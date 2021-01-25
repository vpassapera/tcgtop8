import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-tournaments-list',
  templateUrl: './my-tournaments-list.component.html',
  styleUrls: ['./my-tournaments-list.component.scss']
})
export class MyTournamentsListComponent implements OnInit {
  @Input() format?: string;

  constructor() { }

  ngOnInit() {
  }

}
