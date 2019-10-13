import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {LoginFormComponent} from './login-form/login-form.component';
import {LayoutModule} from "../layout/layout.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LaddaModule} from "angular2-ladda";
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {SettingsComponent} from './settings/settings.component';
import {ToasterModule} from "angular2-toaster";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [LoginFormComponent, RegistrationFormComponent, SettingsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    ToasterModule,
    FontAwesomeModule,
  ]
})
export class AccountModule { }
