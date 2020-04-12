import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { CockatriceServersComponent } from './cockatrice-servers/cockatrice-servers.component';
import { AppStackComponent } from './app-stack/app-stack.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [CockatriceServersComponent, AppStackComponent, ViewComponent],
  imports: [
    CommonModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }
