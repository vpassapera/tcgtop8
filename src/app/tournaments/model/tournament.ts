import {League} from "../../leagues/model/league";
import {Constants} from "../constants";
import {Constants as AppConstants} from "../../constants";
import {sprintf} from 'sprintf-js';
import * as moment from "moment";

export class Tournament {
  private readonly _name: string;
  private readonly _format: string;
  private readonly _rel: string;
  private readonly _bracketType: string;
  private readonly _startDate: moment.Moment;
  private readonly _maxPlayerCount: number;
  private readonly _description: string = '';
  private readonly _private: boolean = false;
  private readonly _online: boolean = false;
  private readonly _location: string = null;
  private readonly _locationDetails: string = null;
  private readonly _league: League = null;
  private readonly _createdBy: string = null;
  private readonly _updatedBy: string = null;
  private readonly _createdAt: moment.Moment = null;
  private readonly _updatedAt: moment.Moment = null;
  private _rounds: number = 0;
  private _players: string[] = [];

  constructor(
    name: string,
    format: string,
    rel: string,
    bracketType: string,
    startDate: moment.Moment,
    maxPlayerCount: number,
    description?: string,
    isPrivate?: boolean,
    online?: boolean,
    location?: string,
    locationDetails?: string,
    league?: League,
    createdBy?: string,
    updatedBy?: string,
    createdAt?: moment.Moment,
    updatedAt?: moment.Moment,
  ) {
    if (!Constants.REL_LEVELS.includes(rel.toLowerCase())) {
      throw new Error(
        sprintf('Invalid REL level. "Is not a valid REL."', rel)
      );
    }

    if (!Constants.BRACKET_TYPES.includes(bracketType.toLowerCase())) {
      throw new Error(
        sprintf('Invalid bracket type selected. "%s" is not a supported type.', bracketType)
      );
    }

    if (!AppConstants.MTG_FORMATS.includes(format.toLowerCase())) {
      throw new Error(
        sprintf('Invalid format. "%s" is not a valid MTG format.', format)
      );
    }

    this._name = name;
    this._format = format.toLowerCase();
    this._rel = rel.toLowerCase();
    this._bracketType = bracketType;
    this._startDate = startDate;
    this._maxPlayerCount = maxPlayerCount;
    this._description = description;
    this._private = isPrivate;
    this._online = online;
    this._location = location;
    this._locationDetails = locationDetails;
    this._league = league;
    this._createdBy = createdBy;
    this._updatedBy = updatedBy;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  public addPlayer(player: string) {
    if (this._players.length == this.maxPlayerCount) {
      throw new Error('Max player count reached!')
    }

    this._players.push(player);
    this.updateRoundCount();
  }

  public removePlayer(player: string) {
    this._players.splice(this._players.indexOf(player), 1);
    this.updateRoundCount();
  }

  public players(): string[] {
    return this._players.splice(0);
  }

  private updateRoundCount() {
    if (this._players.length <= 8) {
      this._rounds = 3;
    }

    if (this._players.length >= 9 && this._players.length <= 16) {
      this._rounds = 4;
    }

    if (this._players.length >= 17 && this._players.length <= 32) {
      this._rounds = 5;
    }

    if (this._players.length >= 33 && this._players.length <= 64) {
      this._rounds = 6;
    }
  }

  get name(): string {
    return this._name;
  }

  get format(): string {
    return this._format;
  }

  get rel(): string {
    return this._rel;
  }

  get bracketType(): string {
    return this._bracketType;
  }

  get startDate(): moment.Moment {
    return this._startDate;
  }

  get maxPlayerCount(): number {
    return this._maxPlayerCount;
  }

  get description(): string {
    return this._description;
  }

  get isPrivate(): boolean {
    return this._private;
  }

  get isOnline(): boolean {
    return this._online;
  }

  get location(): string {
    return this._location;
  }

  get locationDetails(): string {
    return this._locationDetails;
  }

  get league(): League | null {
    return this._league;
  }

  get createdBy(): string | null {
    return this._createdBy;
  }

  get updatedBy(): string | null {
    return this._updatedBy;
  }

  get createdAt(): moment.Moment | null {
    return this._createdAt;
  }

  get updatedAt(): moment.Moment | null {
    return this._updatedAt;
  }
}
