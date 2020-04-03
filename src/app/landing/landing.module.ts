import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LatestComponent } from './latest/latest.component';
import { LayoutModule } from "../layout/layout.module";


@NgModule({
  declarations: [LatestComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LayoutModule
  ]
})
export class LandingModule { }
