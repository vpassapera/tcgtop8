import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-format-most-played-cards',
  templateUrl: './format-most-played-cards.component.html',
  styleUrls: ['./format-most-played-cards.component.scss']
})
export class FormatMostPlayedCardsComponent implements OnInit, OnChanges {
  @Input() format: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
