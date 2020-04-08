import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "../layout/main-layout/main-layout.component";
import {TournamentFormComponent} from "./new-tournament-form/tournament-form.component";


const routes: Routes = [
  {
    path: 'tournaments',
    component: MainLayoutComponent,
    children: [
      {
        path: 'new/:format',
        component: TournamentFormComponent
      },
      {
        path: 'edit/:slug',
        component: TournamentFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
