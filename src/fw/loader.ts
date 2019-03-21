import { Injectable, Inject, InjectionToken } from '@angular/core';
class FbCore {
  initializeApp(cfg) { }
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
          console.log('init', ld);
        };
    }
    constructor(@Inject(fbLib) private lib: FbLib) {
        const { core, config } = lib;
        core.initializeApp(config);
    }
}
