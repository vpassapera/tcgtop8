import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faCaretSquareDown, faCaretSquareUp, faMinusSquare} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup} from "@angular/forms";
import {MetaGameService} from "../service/meta-game.service";
import {MetaDeckCategory} from "../model/meta-deck-category";
import * as moment from "moment";
import {Location} from "../../tournaments/validators/location";

@Component({
  selector: 'app-format-meta-list',
  templateUrl: './format-meta-list.component.html',
  styleUrls: ['./format-meta-list.component.scss']
})
export class FormatMetaListComponent implements OnChanges, OnInit {
  @Input() format: string;
  @Input() timePeriod?: Date = null;
  private objectKeys = Object.keys;
  private metaIncrease: IconDefinition = faCaretSquareUp;
  private metaDecrease: IconDefinition = faCaretSquareDown;
  private metaSame: IconDefinition = faMinusSquare;
  private listItems: MetaDeckCategory[] = [];
  private selectedTime: FormControl;
  public selectedTimeState: string;
  private timeFilter: FormGroup;
  private allowedTimePeriods: {} = {
    'Last 2 Months': {'value': moment().subtract(2, 'months'), default: true},
    'Last 2 weeks': {'value': moment().subtract(2, 'week')},
    'All 2020 Decks': {'value': null},
  }

  constructor(private metaGameService: MetaGameService) {}

  onDateChange(value: string) {
    if (this.allowedTimePeriods.hasOwnProperty(value)) {
      this.timePeriod = this.allowedTimePeriods[value]['value'];
    }

    this.ngOnChanges();
  }

  ngOnInit(): void {
    if (this.timePeriod == null) {
      this.timePeriod = this.allowedTimePeriods['Last 2 Months']['value'].toDate();
      this.selectedTimeState = 'Last 2 Months';
    }

    this.selectedTime = new FormControl({}, []);
    this.timeFilter = new FormGroup({
      selectedTime: this.selectedTime
    });
  }

  ngOnChanges() {
    this.metaGameService.getFormatMetaDecks(this.format, this.timePeriod).subscribe(
      (items) => {
        this.listItems = items;
      }
    )
  }
}
