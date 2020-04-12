import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TournamentsRoutingModule} from './tournaments-routing.module';
import {NewTournamentButtonComponent} from './new-tournament-button/new-tournament-button.component';
import {TournamentFormComponent} from './tournament-form/tournament-form.component';
import {UpcomingTournamentsListComponent} from './upcoming-tournaments-list/upcoming-tournaments-list.component';
import {PastTournamentsListComponent} from './past-tournaments-list/past-tournaments-list.component';
import {ActiveTournamentsListComponent} from './active-tournaments-list/active-tournaments-list.component';
import {MyTournamentsListComponent} from './my-tournaments-list/my-tournaments-list.component';
import {NewComponent} from './new/new.component';
import {EditComponent} from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LaddaModule} from "angular2-ladda";


@NgModule({
  declarations: [
    NewTournamentButtonComponent,
    TournamentFormComponent,
    UpcomingTournamentsListComponent,
    PastTournamentsListComponent,
    ActiveTournamentsListComponent,
    MyTournamentsListComponent,
    NewComponent,
    EditComponent
  ],
  exports: [
    NewTournamentButtonComponent,
    PastTournamentsListComponent,
    ActiveTournamentsListComponent,
    UpcomingTournamentsListComponent,
    MyTournamentsListComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    FontAwesomeModule,
  ]
})
export class TournamentsModule { }
