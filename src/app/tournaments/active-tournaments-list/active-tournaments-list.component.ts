import {Component, Input, OnInit} from '@angular/core';
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-active-tournaments-list',
  templateUrl: './active-tournaments-list.component.html',
  styleUrls: ['./active-tournaments-list.component.scss']
})
export class ActiveTournamentsListComponent implements OnInit {
  @Input() format?: string;
  public faUsers: IconDefinition = faUsers;

  constructor() { }

  ngOnInit() {
  }

}
