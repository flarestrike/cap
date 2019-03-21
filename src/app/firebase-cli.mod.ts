import { NgModule, APP_INITIALIZER } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/messaging';
import 'firebase/storage';
// import 'firebase/firestore';

import { fbLib, FwLoader, FbLib } from '@mod/fw/loader';
import { environment as env } from '@mod/environments/environment';

export function fbLibFac() {
  return { core: firebase, config: env.firebase } as FbLib;
}

@NgModule({
  providers: [
    { provide: fbLib, useFactory: fbLibFac },
    { provide: APP_INITIALIZER, useFactory: FwLoader.init, deps: [FwLoader], multi: true },
  ]
})
export class FirebaseCliMod { }
