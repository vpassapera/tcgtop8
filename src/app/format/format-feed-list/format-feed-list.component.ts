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
  public listItems: FeedItem[];
  public page: number = 1;
  public numPages: number = 1;

  constructor(private client: FeedService) {}

  public setPage(page: number) {
    this.page = page;
    this.getFeedItems();
  }

  ngOnChanges() {
    this.page = 1;
    this.getFeedItems();
  }

  private getFeedItems() {
    this.client.getFeed(this.page, this.format).subscribe(
      (itemCollection) => {
        this.listItems = itemCollection.feedItems;
        this.numPages = itemCollection.pageCount;
      }
    );
  }
}
