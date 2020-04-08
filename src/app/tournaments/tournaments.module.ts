import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { NewTournamentButtonComponent } from './new-tournament-button/new-tournament-button.component';
import { TournamentFormComponent } from './new-tournament-form/tournament-form.component';


@NgModule({
  declarations: [NewTournamentButtonComponent, TournamentFormComponent],
  exports: [
    NewTournamentButtonComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    FontAwesomeModule
  ]
})
export class TournamentsModule { }
