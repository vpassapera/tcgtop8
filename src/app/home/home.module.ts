import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgSpinKitModule} from 'ng-spin-kit';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './latest/home.component';
import { LayoutModule } from '../layout/layout.module';
import { GlobalFeedComponent } from './global-feed/global-feed.component';
import { GlobalLatestWinnersComponent } from './global-latest-winners/global-latest-winners.component';
import { GlobalLatestTournamentsComponent } from './global-latest-tournaments/global-latest-tournaments.component';
import {FeedModule} from '../feed/feed.module';


@NgModule({
  declarations: [HomeComponent, GlobalFeedComponent, GlobalLatestWinnersComponent, GlobalLatestTournamentsComponent],
  imports: [
    NgSpinKitModule,
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    FeedModule,
  ]
})
export class HomeModule { }
