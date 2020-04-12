import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {FooterOnlyLayoutComponent} from "../layout/footer-only-layout/footer-only-layout.component";
import {MainLayoutComponent} from "../layout/main-layout/main-layout.component"
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {SettingsComponent} from "./settings/settings.component";
import {ViewComponent} from "./view/view.component";
import {SelfComponent} from "./self/self.component";

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
      },
      {
        path: 'settings',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: SettingsComponent
          }
        ]
      },
      {
        path: 'view',
        component: MainLayoutComponent,
        children: [
          {
            path: 'self',
            component: SelfComponent
          },
          {
            path: ':user',
            component: ViewComponent
          },
          {
            path: '',
            redirectTo: 'self',
            pathMatch: 'full',
          },
        ]
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
