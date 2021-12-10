import * as moment from 'moment';
import {sprintf} from 'sprintf-js';
import {Constants} from '../constants';
import {Constants as AppConstants} from '../../constants';

export class FeedItem {
  private readonly htmlEnabled: boolean;
  private readonly _game: string;
  private readonly _channel: string;
  private readonly _title: string;
  private readonly _link: string;
  private readonly _body: string;
  private readonly _formats: string[];
  private readonly _createdBy: string;
  private readonly _lastModified: moment.Moment = null;
  private readonly _createdAt: moment.Moment = null;
  private readonly _updatedAt: moment.Moment = null;

  constructor(
    game: string,
    channel: string,
    title: string,
    link: string,
    body: string,
    createdBy: string,
    htmlEnabled: boolean,
    lastModified: moment.Moment,
    createdAt: moment.Moment,
    updatedAt: moment.Moment,
    formats?: string[],
  ) {
    if (!Constants.FEED_SOURCES.includes(channel.toLowerCase())) {
      throw new Error(
        sprintf('Invalid Source %s is not supported!', channel)
      );
    }
    for (const format of formats) {
      if (format && !AppConstants.MTG_FORMATS.includes(format.toLowerCase())) {
        throw new Error(
          sprintf('Invalid format. "%s" is not a valid MTG format.', format)
        );
      }
    }

    this._game = game.toLowerCase();
    this._channel = channel.toLowerCase();
    this._title = title;
    this._link = link;
    this._formats = formats;
    this._body = body;
    this._lastModified = lastModified;
    this._createdBy = createdBy;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this.htmlEnabled = htmlEnabled;
  }

  get game(): string {
    return this._game;
  }

  get channel(): string {
    return this._channel;
  }

  get title(): string {
    return this._title;
  }

  get link(): string {
    return this._link;
  }

  get formats(): string[] {
    return this._formats;
  }

  get body(): string {
    return this._body;
  }

  get isHtmlEnabled(): boolean {
    return this.htmlEnabled;
  }

  get createdBy(): string {
    return this._createdBy;
  }

  get lastModified(): moment.Moment {
    return this._lastModified;
  }

  get createdAt(): moment.Moment {
    return this._createdAt;
  }

  get updatedAt(): moment.Moment {
    return this._updatedAt;
  }

  get permalinkLabel(): string {
    if (this._channel.toLowerCase() === 'mtgstocks') {
      return 'MTG Stocks';
    }

    if (this._channel.toLowerCase() === 'wizards') {
      return 'Wizard News';
    }

    if (this._channel.toLowerCase() === 'channelfireball') {
      return 'ChannelFireball';
    }

    if (this._channel.toLowerCase() === 'mtggoldfish') {
      return 'MTG Goldfish';
    }

    if (this._channel === 'reddit') {
      return 'Reddit';
    }
  }
}
