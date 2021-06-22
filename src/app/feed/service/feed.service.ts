import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {FeedItem} from '../model/feed-item';
import * as moment from 'moment';
import {BackendRoutingService} from '../../backend-routing.service';
import {FeedItemCollection} from '../model/feed-item-collection.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient, private backendRouting: BackendRoutingService) {}

  /**
   * @param data A raw array of feed data
   * @returns FeedItem A FeedItem model
   */
  getNewFeedItem(data: any): FeedItem {
    return new FeedItem(
      data.game,
      data.channel,
      data.title,
      data.link,
      data.body,
      data.author,
      data.isHtmlEnabled,
      moment(data.lastModified),
      moment(data.createdAt),
      moment(data.updatedAt),
      data.formats
    );
  }

  getFeed(page: number = 1, format?: string): Observable<FeedItemCollection> {
    const params: any = {};
    params.page = page;
    if (format) {
      params.format = format;
    }

    const url =  this.backendRouting.generate(
      'get_feed_items',
      params
    );

    return this.http.get(url).pipe(
      map((response: any) => {
        const feedItems = [] as FeedItem[];
        const count: number = response.pageCount;
        for (const feedItem of response.feedItems) {
          feedItems.push(this.getNewFeedItem(feedItem));
        }

        return new FeedItemCollection(count, feedItems);
      })
    );
  }
}
