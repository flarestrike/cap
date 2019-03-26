import { Injectable, Inject, InjectionToken } from '@angular/core';

import * as fb from 'firebase';

interface FwConfig {
  [key: string]: string;
}
class FwCore {
  SDK_VERSION: string;
  apps: fb.app.App[];
  User: fb.User;
  initializeApp(cfg: FwConfig, name = '[DEFAULT]'): fb.app.App { return; }
}
export const fwCore = new InjectionToken<FwCore>('fw.core', {
  providedIn: 'root', factory: () => {
    return new FwCore();
  }
});
export const fwConfig = new InjectionToken<FwConfig>('fw.config', {
  providedIn: 'root', factory: () => {
    return {};
  }
});
const defaultApp = 'main';

// firebase wrapper
@Injectable({ providedIn: 'root' })
export class FwLoader {
  static init(ld: FwLoader) {
    return () => {
      const app = ld.getApp();
      console.log('init', ld.core.SDK_VERSION);
      console.log('app', app.name);
      console.log('app', app);
    };
  }
  constructor(
    @Inject(fwCore) private core: FwCore,
    @Inject(fwConfig) private cfg: FwConfig) {
    this.addApp(defaultApp, cfg);
  }
  addApp(name, cfg) {
    this.core.initializeApp(cfg, name);
  }
  getApp(name = defaultApp) {
    return this.core.apps.find(a => a.name === name);
  }
}
