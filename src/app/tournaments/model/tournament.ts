import {League} from "../../leagues/model/league";
import {Constants} from "../../constants";
import {sprintf} from 'sprintf-js';

export class Tournament {
  private name: string;
  private description: string;
  private private: boolean;
  private format: string;
  private league: League;
  private rounds: number;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    name: string,
    description: string,
    isPrivate: boolean,
    format: string,
    league: League,
    rounds: number,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    if (!Constants.MTG_FORMATS.includes(format.toLowerCase())) {
      throw new Error(
        sprintf('Invalid format. "%s" is not a valid MTG format.', format)
      );
    }

    this.name = name;
    this.description = description;
    this.private = isPrivate;
    this.format = format.toLowerCase();
    this.league = League;
    this.rounds = rounds;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public addPlayer() {

  }

  public removePlayer() {

  }
}
