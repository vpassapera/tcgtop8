import {Component, Input, OnChanges} from '@angular/core';
import {MetaCard} from "../model/meta-card";
import {MetaGameService} from "../service/meta-game.service";
import {MetaCardList} from "../model/meta-card-list";

@Component({
  selector: 'app-format-most-played-cards',
  templateUrl: './format-most-played-cards.component.html',
  styleUrls: ['./format-most-played-cards.component.scss']
})
export class FormatMostPlayedCardsComponent implements OnChanges {
  @Input() format: string;
  public metaCardList: MetaCardList;

  constructor(private metaGameService: MetaGameService) { }

  ngOnChanges() {
    this.metaGameService.getFormatMostPlayedCards(this.format).subscribe(
      (result) => {
        this.metaCardList = result;
      }
    )
  }
}
