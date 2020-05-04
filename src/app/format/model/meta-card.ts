export class MetaCard {
  private readonly _position: number;
  private readonly _name: string;
  private readonly _imageUrl: string;
  private readonly _multiverseId: number;
  private readonly _percentInDecks: number;
  private readonly _entry: string = null;

  constructor(
    position: number,
    name: string,
    imageUrl: string,
    multiverseId: number,
    percentage: number,
    entry?: string,
  ) {
    this._position = position;
    this._name = name;
    this._imageUrl = imageUrl;
    this._multiverseId = multiverseId;
    this._percentInDecks = percentage;
    this._entry = entry;
  }

  isTopCard() {
    return this.position === 1;
  }

  get position(): number {
    return this._position;
  }

  get name(): string {
    return this._name;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get getOracleLink(): string {
    return 'https://gatherer.wizards.com/pages/card/details.aspx?multiverseid=' + this._multiverseId;
  }

  get percentInDecks(): number {
    return this._percentInDecks;
  }

  get entry(): string|null {
    return this._entry;
  }
}
