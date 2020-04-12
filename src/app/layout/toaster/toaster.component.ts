import {Component, OnInit} from '@angular/core';
import {ToasterConfig} from "angular2-toaster";
import {Constants} from "../../constants";

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  public toasterConfig: ToasterConfig;

  constructor() {
    this.toasterConfig = new ToasterConfig({
      tapToDismiss: true,
      timeout: Constants.TOASTER_TIMEOUT
    });
  }

  ngOnInit() {
  }

}
