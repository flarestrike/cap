import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/messaging';
import 'firebase/storage';
// import 'firebase/firestore';

import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { fbLib, FwLoader, FbLib } from '@mod/fw/loader';

export function fbLibFac(config) {
  return () => ({ core: firebase as any, config } as FbLib);
}

@NgModule({})
export class FwCliMod {
  static forRoot(cfg): ModuleWithProviders {
    return {
      ngModule: FwCliMod,
      providers: [
        { provide: fbLib, useFactory: fbLibFac(cfg) },
        { provide: APP_INITIALIZER, useFactory: FwLoader.init, deps: [FwLoader], multi: true },
      ]
    };
  }
}
