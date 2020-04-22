import * as moment from 'moment';

export const environment = {
  production: false,
  envName: 'development',
  api: {
    host: 'api.freetop8.local',
    root: 'https://api.freetop8.local/app_dev.php'
  },
  appInfo: {
    appName: 'FreeTop8',
    version: 'SNAPSHOT',
    sourceRef: 'DEVELOPMENT_SNAPSHOT',
    buildDateTime: moment().toISOString()
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
