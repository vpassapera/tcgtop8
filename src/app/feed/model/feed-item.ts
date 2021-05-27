import * as moment from 'moment';
import {sprintf} from 'sprintf-js';
import {Constants} from '../constants';
import {Constants as AppConstants} from '../../constants';

export class FeedItem {
  private readonly htmlEnabled: boolean;
  private readonly _type: string;
  private readonly _title: string;
  private readonly _link: string;
  private readonly _body: string;
  private readonly _formats: string[];
  private readonly _createdBy: string;
  private readonly _createdAt: moment.Moment = null;
  private readonly _updatedAt: moment.Moment = null;

  constructor(
    type: string,
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
    if (!Constants.FEED_SOURCES.includes(type.toLowerCase())) {
      throw new Error(
        sprintf('Invalid Source %s is not supported!', type)
      );
    }
    for (const format of formats) {
      if (format && !AppConstants.MTG_FORMATS.includes(format.toLowerCase())) {
        throw new Error(
          sprintf('Invalid format. "%s" is not a valid MTG format.', format)
        );
      }
    }

    this._type = type.toLowerCase();
    this._title = title;
    this._link = link;
    this._formats = formats;
    this._body = body;
    this._createdBy = createdBy;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this.htmlEnabled = htmlEnabled;
  }

  get type(): string {
    return this._type;
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

  get createdAt(): moment.Moment {
    return this._createdAt;
  }

  get updatedAt(): moment.Moment {
    return this._updatedAt;
  }

  get permalinkLabel(): string {
    if (this._type.toLowerCase() === 'mtgstocks') {
      return 'MTG Stocks';
    }

    if (this._type.toLowerCase() === 'wizards') {
      return 'Wizard News';
    }

    if (this._type.toLowerCase() === 'channelfireball') {
      return 'ChannelFireball';
    }

    if (this._type.toLowerCase() === 'mtggoldfish') {
      return 'MTG Goldfish';
    }

    if (this._type === 'reddit') {
      return 'Reddit';
    }
  }
}
