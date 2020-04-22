import {environment} from '../../../environments/environment';

interface ScriptInterface {
  name: string;
  src: string;
}

export const ScriptStore: ScriptInterface[] = [
  {
    name: 'sfRoutes',
    src: environment.api.root + '/js/routing.json?callback=fos.Router.setData'
  }
];
