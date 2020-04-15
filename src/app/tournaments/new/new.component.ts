import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToasterService} from "angular2-toaster";
import {Title} from "@angular/platform-browser";
import {Constants} from "../../constants";
import {sprintf} from "sprintf-js";
import {Tournament} from "../model/tournament";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public format: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toasterService: ToasterService,
    private titleService: Title
  ) {
    route.params.subscribe(
      params => {
        if (!Constants.MTG_FORMATS.includes(params['format'])) {
          return this.router.navigate(['/404'])
        }

        this.format = params['format'];
        this.titleService.setTitle(sprintf('FreeTop8::New %s tournament', this.format))
      }
    )
  }

  ngOnInit() {
  }

}
