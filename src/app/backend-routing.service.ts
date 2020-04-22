///<reference path="../../node_modules/FOSJsRoutingBundle/Resources/ts/router.d.ts" />
import {Injectable} from '@angular/core';
declare var Routing: FOS.Router;

@Injectable({
  providedIn: 'root'
})
export class BackendRoutingService {
  private routing: FOS.Router;
  private baseUrl: string = null;
  private routes: FOS.RoutesMap = null;

  constructor () {
    this.routing = Routing;
  }

  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }

  setRoutes(routes: FOS.RoutesMap): void {
    this.routes = routes;
  }

  generate (routeName: string, options: object = {}): string {
    if (this.baseUrl) {
      this.routing.setBaseUrl(this.baseUrl);
    }

    if (this.routes) {
      this.routing.setRoutes(this.routes);
    }

    return this.routing.generate(routeName, options, true);
  }
}
