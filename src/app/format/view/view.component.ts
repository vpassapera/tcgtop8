import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Constants} from "../../constants";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public format: string;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.format = params['format'];
      if (!Constants.MTG_FORMATS.includes(this.format)) {

      }
    })
  }

  ngOnInit() {
  }

}
