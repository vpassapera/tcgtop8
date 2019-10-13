import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {FooterOnlyLayoutComponent} from "../layout/footer-only-layout/footer-only-layout.component";
import {MainLayoutComponent} from "../layout/main-layout/main-layout.component"
import {RegistrationFormComponent} from "./registration-form/registration-form.component";

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
            component: LoginFormComponent
          }
        ]
      },
      {
        path: 'register',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: RegistrationFormComponent
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
