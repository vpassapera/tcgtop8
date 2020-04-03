import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FormComponent } from './login/form/form.component';
import {LayoutModule} from "../layout/layout.module";


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    LayoutModule
  ]
})
export class AccountModule { }
