import {League} from "../../leagues/model/league";
import {Constants} from "../../constants";
import {sprintf} from 'sprintf-js';

export class Tournament {
  private readonly _name: string;
  private readonly _format: string;
  private readonly _rel: string;
  private readonly _startDate: Date;
  private readonly _description: string = '';
  private readonly _private: boolean = false;
  private readonly _online: boolean = false;
  private readonly _location: string = null;
  private readonly _league: League = null;
  private readonly _createdBy: string = null;
  private readonly _updatedBy: string = null;
  private readonly _createdAt: Date = null;
  private readonly _updatedAt: Date = null;
  private _rounds: number = 0;
  private _players: string[] = [];

  constructor(
    name: string,
    format: string,
    rel: string,
    startDate: Date,
    description?: string,
    isPrivate?: boolean,
    online?: boolean,
    location?: string,
    league?: League,
    createdBy?: string,
    updatedBy?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    if (!Constants.REL_LEVELS.includes(rel.toLowerCase())) {
      throw new Error(
        sprintf('Invalid REL level. "Is not a valid REL."', rel)
      );
    }

    if (!Constants.MTG_FORMATS.includes(format.toLowerCase())) {
      throw new Error(
        sprintf('Invalid format. "%s" is not a valid MTG format.', format)
      );
    }

    this._name = name;
    this._format = format.toLowerCase();
    this._rel = rel.toLowerCase();
    this._startDate = startDate;
    this._description = description;
    this._private = isPrivate;
    this._online = online;
    this._location = location;
    this._league = league;
    this._createdBy = createdBy;
    this._updatedBy = updatedBy;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  public addPlayer(player: string) {
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

  get startDate(): Date {
    return this._startDate;
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

  get league(): League | null {
    return this._league;
  }

  get createdBy(): string | null {
    return this._createdBy;
  }

  get updatedBy(): string | null {
    return this._updatedBy;
  }

  get createdAt(): Date | null {
    return this._createdAt;
  }

  get updatedAt(): Date | null {
    return this._updatedAt;
  }
}
