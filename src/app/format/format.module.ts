import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatRoutingModule } from './format-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    FormatRoutingModule
  ]
})
export class FormatModule { }
