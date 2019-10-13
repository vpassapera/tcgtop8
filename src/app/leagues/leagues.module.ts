import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { HomeComponent } from './home/home.component';
import { SponsoredLeaguesComponent } from './sponsored-leagues/sponsored-leagues.component';
import { LeaguesIndexComponent } from './leagues-index/leagues-index.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [HomeComponent, SponsoredLeaguesComponent, LeaguesIndexComponent, ViewComponent],
  imports: [
    CommonModule,
    LeaguesRoutingModule
  ]
})
export class LeaguesModule { }
