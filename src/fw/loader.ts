import { Injectable, Inject, InjectionToken } from '@angular/core';

import * as fb from 'firebase';

const defaultApp = 'main';
interface FwOption {
  [key: string]: string;
}
export class FwCore {
  SDK_VERSION: string;
  apps: fb.app.App[];
  User: fb.User;
  initializeApp(cfg: FwOption, name = '[DEFAULT]'): fb.app.App { return; }
}
export class FwApp {
  options: FwOption;
  name = 'null';
}

export const fwApps = new InjectionToken<FwApp[]>('fw.apps', {
  providedIn: 'root', factory: () => {
    return [new FwApp()];
  }
});
export const fwCore = new InjectionToken<FwCore>('fw.core', {
  providedIn: 'root', factory: () => {
    return new FwCore();
  }
});

function debugAppInfo(sdk: FwCore) {
  console.log('firebase SDK version', sdk.SDK_VERSION);
  sdk.apps.forEach(a => {
    console.log('app: [', a.name, '] ', a.options);
  });
}

@Injectable({ providedIn: 'root' })
export class FwLoader {
  static init(ld: FwLoader) {
    return () => {
      ld.apps.forEach(({ options, name }) => {
        ld.addApp(name, options);
      });
      if (ld.debug) {
        debugAppInfo(ld.core);
      }
    };
  }
  debug = true;
  apps: FwApp[];
  constructor(
    @Inject(fwApps) apps: FwApp[],
    @Inject(fwCore) private core: FwCore) {
    this.apps = apps;
  }
  addApp(name, cfg) {
    this.core.initializeApp(cfg, name);
  }
  getApp(name = defaultApp) {
    return this.core.apps.find(a => a.name === name);
  }
}
