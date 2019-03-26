import { Injectable } from '@angular/core';
import { FwLoader as Loader } from './loader';

@Injectable({ providedIn: 'root' })
export class FwAuth {
  static init(a: FwAuth) {
    return () => {
      console.log('auth init');
      a.setup('main');
    };
  }
  constructor(private ld: Loader) {
  }
  setup(appName) {
    const app = this.ld.getApp(appName);
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user', user);
      } else {
        console.log('anonymous');
      }
    });
  }
}
