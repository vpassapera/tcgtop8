import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatRoutingModule } from './format-routing.module';
import { ViewComponent } from './view/view.component';
import {TournamentsModule} from "../tournaments/tournaments.module";
import {ToasterModule} from "angular2-toaster";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FormatFeedListComponent } from './format-feed-list/format-feed-list.component';
import { FormatMostPlayedCardsComponent } from './format-most-played-cards/format-most-played-cards.component';
import { FormatMetaListComponent } from './format-meta-list/format-meta-list.component';


@NgModule({
  declarations: [ViewComponent, FormatFeedListComponent, FormatMostPlayedCardsComponent, FormatMetaListComponent],
  imports: [
    CommonModule,
    FormatRoutingModule,
    TournamentsModule,
    ToasterModule,
    FontAwesomeModule
  ]
})
export class FormatModule { }
