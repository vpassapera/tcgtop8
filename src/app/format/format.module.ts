import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatRoutingModule } from './format-routing.module';
import { ViewComponent } from './view/view.component';
import {TournamentsModule} from "../tournaments/tournaments.module";


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    FormatRoutingModule,
    TournamentsModule
  ]
})
export class FormatModule { }
