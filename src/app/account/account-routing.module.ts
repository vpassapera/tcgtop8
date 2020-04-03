import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './login/form/form.component';
import {FooterOnlyLayoutComponent} from "../layout/footer-only-layout/footer-only-layout.component";


const routes: Routes = [
  {
    path: 'account',
    children: [
      {
        path: 'login',
        component: FooterOnlyLayoutComponent,
        children: [
          {
            path: '',
            component: FormComponent
          }
        ]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
