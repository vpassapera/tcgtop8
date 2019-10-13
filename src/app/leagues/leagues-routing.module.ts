import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "../layout/main-layout/main-layout.component";
import {HomeComponent} from "./home/home.component";
import {ViewComponent} from "./view/view.component";


const routes: Routes = [
  {
    path: 'leagues',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':league',
        component: ViewComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguesRoutingModule { }
