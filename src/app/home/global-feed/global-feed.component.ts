import { Component, OnInit } from '@angular/core';
import {FeedItem} from "../../feed/model/feed-item";
import * as moment from "moment";
import {FeedService} from "../../feed/service/feed.service";

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
  private listItems: FeedItem[];

  constructor(private client: FeedService) {}

  ngOnInit() {
    this.client.getFeed().subscribe(
      (items) => {
        this.listItems = items;
      }
    )
  }

}
