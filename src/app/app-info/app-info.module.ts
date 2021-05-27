import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInfoRoutingModule } from './app-info-routing.module';
import { HomeComponent } from './home/home.component';
import {NgSpinKitModule} from 'ng-spin-kit';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgSpinKitModule,
    AppInfoRoutingModule
  ]
})
export class AppInfoModule { }
