import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {ViewComponent} from './view/view.component';
import {ListComponent as DeckListComponent} from './deck/list/list.component';


const routes: Routes = [
  {
    path: 'formats',
    component: MainLayoutComponent,
    children: [
      {
        path: ':format',
        component: ViewComponent
      },
      {
        path: ':format/decks',
        component: DeckListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormatRoutingModule { }
