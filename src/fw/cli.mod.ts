import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/messaging';
import 'firebase/storage';
// import 'firebase/firestore';

import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { fwCore, fwConfig, FwLoader } from '@mod/fw/loader';

export function flib() {
  return firebase;
}

@NgModule({})
export class FwCliMod {
  static forRoot(cfg): ModuleWithProviders {
    return {
      ngModule: FwCliMod,
      providers: [
        { provide: fwConfig, useValue: cfg },
        { provide: fwCore, useFactory: flib },
        { provide: APP_INITIALIZER, useFactory: FwLoader.init, deps: [FwLoader], multi: true },
      ]
    };
  }
}
