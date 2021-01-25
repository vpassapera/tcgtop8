import * as moment from "moment";
import {MetaDeckPrice} from "./meta-deck-price";

export class MetaDeck {
  private readonly _name: string;
  private readonly _count: number;
  private readonly _percent: number;
  private readonly _trend: string;
  private readonly _prices: MetaDeckPrice[];
  private readonly _createdBy: string;
  private readonly _updatedBy: string;
  private readonly _createdAt: moment.Moment = null;
  private readonly _updatedAt: moment.Moment = null;

  constructor(
    name: string,
    count: number,
    percent: number,
    trend: string,
    prices: MetaDeckPrice[],
    createdBy: string,
    updatedBy: string,
    createdAt: moment.Moment,
    updatedAt: moment.Moment,
  ) {
    this._name = name;
    this._count = count;
    this._percent = percent;
    this._trend = trend;
    this._prices = prices;
    this._createdBy = createdBy;
    this._updatedBy = updatedBy;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get name(): string {
    return this._name;
  }

  get count(): number {
    return this._count;
  }

  get percent(): number {
    return this._percent;
  }

  get trend(): string {
    return this._trend;
  }

  get prices(): MetaDeckPrice[] {
    return this._prices;
  }

  get createdBy(): string {
    return this._createdBy;
  }

  get updatedBy(): string {
    return this._updatedBy;
  }

  get createdAt(): moment.Moment {
    return this._createdAt;
  }

  get updatedAt(): moment.Moment {
    return this._updatedAt;
  }
}
