import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {NotFoundComponent} from "./layout/not-found/not-found.component";

const routes: Routes = [
  {
    path: '404',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
