import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faCaretSquareDown, faCaretSquareUp, faMinusSquare} from "@fortawesome/free-solid-svg-icons";
import {MetaGameService} from "../service/meta-game.service";
import {MetaDeckCategory} from "../model/meta-deck-category";

@Component({
  selector: 'app-format-meta-list',
  templateUrl: './format-meta-list.component.html',
  styleUrls: ['./format-meta-list.component.scss']
})
export class FormatMetaListComponent implements OnInit, OnChanges {
  @Input() format: string;
  public metaIncrease: IconDefinition = faCaretSquareUp;
  public metaDecrease: IconDefinition = faCaretSquareDown;
  public metaSame: IconDefinition = faMinusSquare;
  public listItems: MetaDeckCategory[] = [];

  constructor(private metaGameService: MetaGameService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.metaGameService.getFormatMetaDecks(this.format).subscribe(
      (items) => {
        this.listItems = items;
      }
    )
  }
}
