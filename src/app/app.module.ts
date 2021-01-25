import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccountModule} from './account/account.module';
import {HomeModule} from "./home/home.module";
import {ToasterService} from "angular2-toaster";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {LeaguesModule} from "./leagues/leagues.module";
import {FormatModule} from "./format/format.module";
import {FeedModule} from "./feed/feed.module";
import {BackendRoutingService} from "./backend-routing.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AccountModule,
    HomeModule,
    LeaguesModule,
    FormatModule,
    AppRoutingModule,
    FeedModule,
  ],
  providers: [
    ToasterService,
    BackendRoutingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
