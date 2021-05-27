import { Injectable } from '@angular/core';
import {Router, RouteParams} from 'symfony-ts-router';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendRoutingService {
  private readonly routing: Router;

  constructor (private http: HttpClient) {
    this.routing = new Router();
    const routes = require('../assets/js/fos_js_routes.json');
    this.routing.setRoutingData(routes);
    this.routing.setScheme('https');
    this.routing.setHost(environment.api.host);
  }

  generate (name: string, params: RouteParams = {}, absolute = false): string {
    return this.routing.generate(name, params, true);
  }
}
