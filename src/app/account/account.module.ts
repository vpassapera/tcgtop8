import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {LoginFormComponent} from './login-form/login-form.component';
import {LayoutModule} from "../layout/layout.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LaddaModule} from "angular2-ladda";
import {RegistrationFormComponent} from './registration-form/registration-form.component';

@NgModule({
  declarations: [LoginFormComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule
  ]
})
export class AccountModule { }
