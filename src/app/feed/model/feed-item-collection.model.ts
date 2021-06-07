import {FeedItem} from './feed-item';

export class FeedItemCollection {
  private readonly _pageCount: number;
  private readonly _feedItems: FeedItem[];

  constructor(
    pageCount: number,
    feedItems: FeedItem[],
  ) {
    this._pageCount = pageCount;
    this._feedItems = feedItems;
  }

  get pageCount(): number {
    return this._pageCount;
  }

  get feedItems(): FeedItem[] {
    return this._feedItems;
  }
}
