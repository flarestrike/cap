import { Injectable, Inject, InjectionToken } from '@angular/core';

import * as fb from 'firebase';

interface FwConfig {
  [key: string]: string;
}
class FwCore {
  SDK_VERSION: string;
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

// firebase wrapper
@Injectable({ providedIn: 'root' })
export class FwLoader {
    static init(ld: FwLoader) {
        return () => {
          console.log('init', ld.core.SDK_VERSION);
          console.log('app', ld.app.name);
          console.log('auth', ld.app.auth());
        };
    }
    app: fb.app.App;
    constructor(
        @Inject(fwCore) private core: FwCore,
        @Inject(fwConfig) private cfg: FwConfig) {
        this.app = core.initializeApp(cfg, 'main');
    }
}
