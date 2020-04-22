import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {FeedItem} from "../model/feed-item";
import * as moment from "moment";
import {BackendRoutingService} from "../../backend-routing.service";

const localUrl = 'assets/data/feed-items.json';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  // constructor(private http: HttpClient, private backendRouting: BackendRoutingService) {}
  constructor(private http: HttpClient) {}

  /**
   * @param data
   * @returns {FeedItem}
   */
  getNewFeedItem(data: any): FeedItem {
    return new FeedItem(
      data.sourceType,
      data.title,
      data.link,
      data.description,
      data.createdBy,
      data.hasHtml,
      moment(data.createdAt),
      moment(data.updatedAt)
    );
  }

  getFeed(page: number = 0, format?: string) {
    // let url =  this.backendRouting.generate(
    //   'get_feed',
    //   {_format: 'json', page: page, format: format}
    // );

    return this.http.get(localUrl).pipe(
      map((response: any) => {
        const feedItems = <FeedItem[]>[];
        for (const feedItem of response.feedItems) {
          feedItems.push(this.getNewFeedItem(feedItem));
        }

        return feedItems;
      })
    );
  }
}
