import {MetaCard} from "./meta-card";

export class MetaCardList {
  private readonly _topCard: MetaCard;
  private readonly _orderedCardList: MetaCard[] = [];

  constructor(cardList: MetaCard[]) {
    for (const card of cardList) {
      if (card.isTopCard()) {
        this._topCard = card;
        continue;
      }

      this._orderedCardList.push(card);
    }
  }

  get topCard(): MetaCard {
    return this._topCard;
  }

  get nonWinnerList(): MetaCard[] {
    this._orderedCardList.sort((a: MetaCard, b: MetaCard) => (a.position > b.position) ? 1: -1);

    return this._orderedCardList;
  }
}
