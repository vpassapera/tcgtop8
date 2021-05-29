import {Component, Input, OnChanges} from '@angular/core';
import {FeedItem} from '../../feed/model/feed-item';
import {FeedService} from '../../feed/service/feed.service';

@Component({
  selector: 'app-format-feed-list',
  templateUrl: './format-feed-list.component.html',
  styleUrls: ['./format-feed-list.component.scss']
})
export class FormatFeedListComponent implements OnChanges {
  @Input() format: string;
  private listItems: FeedItem[];
  private page: number = 1;

  constructor(private client: FeedService) {}

  ngOnChanges() {
    this.client.getFeed(this.page, this.format).subscribe(
      (items) => {
        this.listItems = items;
      }
    );
  }
}
