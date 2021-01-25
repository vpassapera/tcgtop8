import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FeedItem} from "../../feed/model/feed-item";
import * as moment from "moment";
import {FeedService} from "../../feed/service/feed.service";

@Component({
  selector: 'app-format-feed-list',
  templateUrl: './format-feed-list.component.html',
  styleUrls: ['./format-feed-list.component.scss']
})
export class FormatFeedListComponent implements OnChanges {
  @Input() format: string;
  private listItems: FeedItem[];

  constructor(private client: FeedService) {}

  ngOnChanges() {
    this.client.getFeed().subscribe(
      (items) => {
        this.listItems = items;
      }
    )
  }
}
