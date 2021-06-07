import {Component, OnInit} from '@angular/core';
import {FeedItem} from '../../feed/model/feed-item';
import {FeedService} from '../../feed/service/feed.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
  public listItems: FeedItem[];
  public page: number = 1;
  public numPages: number = 1;

  constructor(private client: FeedService) {}

  public setPage(page: number) {
    this.page = page;
    this.getFeedItems();
  }

  ngOnInit() {
    this.getFeedItems();
  }

  private getFeedItems(): void {
    this.client.getFeed(this.page).subscribe(
      (itemCollection) => {
        this.listItems = itemCollection.feedItems;
        this.numPages = itemCollection.pageCount;
      }
    );
  }
}
