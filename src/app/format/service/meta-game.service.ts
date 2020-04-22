import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {MetaDeck} from "../model/meta-deck";
import {MetaDeckPrice} from "../model/meta-deck-price";
import * as moment from "moment";
import {MetaDeckCategory} from "../model/meta-deck-category";
import {Observable} from "rxjs";

const localUrl = 'assets/data/metagame.json';

@Injectable({
  providedIn: 'root'
})
export class MetaGameService {

  // constructor(private http: HttpClient, private backendRouting: BackendRoutingService) {}
  constructor(private http: HttpClient) {}

  getNewMetaDeck(data: any): MetaDeck {
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

  getFormatMetaDecks(format: string): Observable<MetaDeckCategory[]> {
    return this.http.get(localUrl).pipe(
      map((response: any) => {
        const metaDecks = <MetaDeckCategory[]>[];
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
}
