import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {MetaDeck} from "../model/meta-deck";
import {MetaDeckPrice} from "../model/meta-deck-price";
import * as moment from "moment";
import {MetaDeckCategory} from "../model/meta-deck-category";
import {Observable} from "rxjs";
import {MetaCard} from "../model/meta-card";
import {MetaCardList} from "../model/meta-card-list";

@Injectable({
  providedIn: 'root'
})
export class MetaGameService {

  // constructor(private http: HttpClient, private backendRouting: BackendRoutingService) {}
  constructor(private http: HttpClient) {}

  private getNewMetaCard(data: any): MetaCard {
    return new MetaCard(
      data.rank,
      data.name,
      data.imageUrl,
      data.multiverseid,
      data.percentage,
      data.hasOwnProperty('entry') ? data.entry : null
    );
  }

  private getNewMetaDeck(data: any): MetaDeck {
    const deckPrices = <MetaDeckPrice[]>[];
    for (const entry of data.averagePrices) {
      deckPrices.push(
        new MetaDeckPrice(
          entry.merchant,
          entry.abbreviation,
          entry.price,
          entry.currency
        )
      );
    }

    return new MetaDeck(
      data.name,
      data.count,
      data.percent,
      data.trend,
      deckPrices,
      data.createdBy,
      data.updatedBy,
      moment(data.createdAt),
      moment(data.updatedAt)
    );
  }

  getFormatMetaDecks(format: string, startDate?: Date): Observable<MetaDeckCategory[]> {
    return this.http.get('assets/data/metagame.json').pipe(
      map((response: any) => {
        const metaDecks = [] as MetaDeckCategory[];
        for (const category in response.metaDecks) {
          if (response.metaDecks.hasOwnProperty(category)) {
            const list = <MetaDeck[]>[];
            for (const deckList of response.metaDecks[category]) {
              list.push(this.getNewMetaDeck(deckList));
            }
            metaDecks.push(new MetaDeckCategory(category, list));
          }
        }

        return metaDecks;
      })
    );
  }

  getFormatMostPlayedCards(format: string): Observable<MetaCardList> {
    return this.http.get('assets/data/top-cards.json').pipe(
      map((response: any) => {
        const metaCards = <MetaCard[]>[];
        for (const card of response.cards) {
          metaCards.push(this.getNewMetaCard(card));
        }

        return new MetaCardList(metaCards);
      })
    );
  }
}
