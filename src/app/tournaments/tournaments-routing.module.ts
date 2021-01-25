import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "../layout/main-layout/main-layout.component";
import {NewComponent} from "./new/new.component";
import {EditComponent} from "./edit/edit.component";


const routes: Routes = [
  {
    path: 'tournaments',
    component: MainLayoutComponent,
    children: [
      {
        path: 'new/:format',
        component: NewComponent
      },
      {
        path: 'edit/:slug',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
