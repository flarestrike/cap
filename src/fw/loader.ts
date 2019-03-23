import { Injectable, Inject, InjectionToken } from '@angular/core';

import * as fb from 'firebase';

class FbCore {
  SDK_VERSION: string;
  User: fb.User;
  initializeApp(cfg, name = '[DEFAULT]'): fb.app.App { return; }
}
export class FbLib {
  core = new FbCore();
  config = {};
}
export const fbLib = new InjectionToken<FbLib>('firebase.lib', {
    providedIn: 'root', factory: () => {
        return new FbLib();
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
    core: FbCore;
    app: fb.app.App;
    config;
    constructor(@Inject(fbLib) private lib: FbLib) {
        const { core, config } = lib;
        this.app = core.initializeApp(config, 'main');
        this.core = core;
        this.config = config;
    }
}
