import {MetaDeck} from "./meta-deck";

export class MetaDeckCategory {
  private readonly _name: string;
  private readonly _decks: MetaDeck[];

  constructor(
    name: string,
    decks: MetaDeck[]
  ) {
    this._name = name;
    this._decks = decks;
  }

  get name(): string {
    return this._name;
  }

  get decks(): MetaDeck[] {
    return this._decks;
  }
}
