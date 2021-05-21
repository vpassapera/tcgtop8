import * as moment from 'moment';
import {sprintf} from 'sprintf-js';
import {Constants} from '../constants';
import {Constants as AppConstants} from '../../constants';

export class FeedItem {
  private readonly _sourceType: string;
  private readonly _isHtml: boolean;
  private readonly _title: string;
  private readonly _link: string;
  private readonly _format: string;
  private readonly _description: string;
  private readonly _createdBy: string;
  private readonly _createdAt: moment.Moment = null;
  private readonly _updatedAt: moment.Moment = null;

  constructor(
    sourceType: string,
    title: string,
    link: string,
    description: string,
    createdBy: string,
    isHtml: boolean,
    createdAt: moment.Moment,
    updatedAt: moment.Moment,
    format?: string,
  ) {
    if (!Constants.FEED_SOURCES.includes(sourceType.toLowerCase())) {
      throw new Error(
        sprintf('Invalid Source %s is not supported!', sourceType)
      );
    }

    if (format && !AppConstants.MTG_FORMATS.includes(format.toLowerCase())) {
      throw new Error(
        sprintf('Invalid format. "%s" is not a valid MTG format.', format)
      );
    }

    this._sourceType = sourceType.toLowerCase();
    this._title = title;
    this._link = link;
    this._format = format;
    this._isHtml = isHtml;
    this._description = description;
    this._createdBy = createdBy;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get sourceType(): string {
    return this._sourceType;
  }

  get title(): string {
    return this._title;
  }

  get link(): string {
    return this._link;
  }

  get format(): string {
    return this._format;
  }

  get description(): string {
    return this._description;
  }

  get isHtml(): boolean {
    return this._isHtml;
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
    if (this.sourceType.toLowerCase() === 'mtgstocks') {
      return 'MTG Stocks';
    }

    if (this.sourceType.toLowerCase() === 'wizards') {
      return 'Wizard News';
    }

    if (this.sourceType.toLowerCase() === 'channelfireball') {
      return 'ChannelFireball';
    }

    if (this.sourceType.toLowerCase() === 'mtggoldfish') {
      return 'MTG Goldfish';
    }

    if (this.sourceType === 'reddit') {
      return 'Reddit';
    }
  }
}
