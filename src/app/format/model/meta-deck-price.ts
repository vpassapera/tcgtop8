export class MetaDeckPrice {
  private readonly _merchant: string;
  private readonly _merchantAbbreviation: string;
  private readonly _price: Number;
  private readonly _currency: string;

  constructor(
    merchant: string,
    merchantAbbreviation: string,
    price: number,
    currency: string
  ) {
    this._merchant = merchant;
    this._merchantAbbreviation = merchantAbbreviation;
    this._price = price;
    this._currency = currency;
  }

  get merchant(): string {
    return this._merchant;
  }

  get merchantAbbreviation(): string {
    return this._merchantAbbreviation;
  }

  get price(): Number {
    return this._price;
  }

  get currency(): string {
    return this._currency;
  }
}
