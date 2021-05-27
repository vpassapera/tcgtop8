import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ApplicationInformation} from '../model/application-information.model';
import {InfoService} from '../service/info.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public frontend: ApplicationInformation;
  public backend: ApplicationInformation;
  public moment: any = moment;

  constructor(private infoService: InfoService) {
    this.frontend = new ApplicationInformation(
      environment.appInfo.appName,
      environment.appInfo.version,
      environment.appInfo.sourceRef,
      environment.appInfo.buildDateTime
    );

    this.infoService.getAppInfo().subscribe(
      (apiInfo) => {
        this.backend = apiInfo;
      }
    );
  }

  ngOnInit() {
  }

}
