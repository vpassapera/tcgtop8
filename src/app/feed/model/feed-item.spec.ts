import * as moment from 'moment';
import { FeedItem } from './feed-item';

describe('FeedItem', () => {
  it('should create an instance', () => {
    const item = new FeedItem(
      'foo',
      'foo',
      'foo',
      'foo',
      'foo',
      false,
      moment(),
      moment()
    );
    expect(item).toBeTruthy();
  });
});
