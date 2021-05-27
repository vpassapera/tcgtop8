import { Injectable } from '@angular/core';
import {ApplicationInformation} from '../model/application-information.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BackendRoutingService} from '../../backend-routing.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private http: HttpClient, private backendRouter: BackendRoutingService) { }

  /**
   * @param data A raw array of feed data
   * @returns ApplicationInformation A ApplicationInformation model
   */
  getNewAppInfo(data: any): ApplicationInformation {
    return new ApplicationInformation(
      data.app_name,
      data.version,
      data.source_ref,
      data.build_date_time
    );
  }

  public getAppInfo(): Observable<ApplicationInformation> {
    return this.http.get(this.backendRouter.generate('app_info')).pipe(
      map((response: any) => {
        return this.getNewAppInfo(response);
      })
    );
  }
}
