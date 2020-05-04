import {Component, OnChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../constants";
import {Title} from "@angular/platform-browser";
import {ToasterService} from "angular2-toaster";
import {sprintf} from 'sprintf-js';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnChanges {
  private modes: string[] = [
    'upcoming',
    'past',
    'own',
    'feed'
  ];
  private mode: string;
  public format: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private toasterService: ToasterService,
  ) {
      route.params.subscribe(
        params => {
          if (!Constants.MTG_FORMATS.includes(params['format'])) {
            return this.router.navigate(['/404'])
          }

          if (this.format !== params['format']) {
            this.format = params['format'];
            this.titleService.setTitle('FreeTop8::' + this.format[0].toUpperCase() + this.format.slice(1));
            // Let's refresh the component since we've changed formats.
            this.ngOnChanges();
          }
        }
      )
  }

  ngOnChanges() {
    this.mode = 'feed';
  }

  setMode(mode: string) {
    if (!this.modes.includes(mode)) {
      this.toasterService.pop(
        'error',
        'Invalid mode!',
        sprintf('Mode %s is not a valid selection', mode)
      );
      return;
    }

    this.mode = mode;
  }

  getMode() {
    return this.mode;
  }
}
