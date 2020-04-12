import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToasterService} from "angular2-toaster";
import {Title} from "@angular/platform-browser";
import {sprintf} from "sprintf-js";
import {Tournament} from "../model/tournament";
import * as moment from "moment";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public slug: string;
  public tournament: Tournament;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toasterService: ToasterService,
    private titleService: Title
  ) {
    route.params.subscribe(
      params => {
        this.slug = params['slug'];
        this.titleService.setTitle(sprintf('FreeTop8::Editing %s tournament', this.slug))
      }
    )
  }

  ngOnInit() {
    this.tournament = new Tournament(
      'Foo Bar',
      'modern',
      'regular',
      moment().toDate(),
    'A quick test tournament',
      false,
      true,
      'cockatrice'
    )
  }
}
