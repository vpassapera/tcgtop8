import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedItemComponent} from './feed-item/feed-item.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    FeedItemComponent
  ],
  exports: [
    FeedItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class FeedModule { }
