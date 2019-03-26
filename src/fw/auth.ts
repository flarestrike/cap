import { Injectable } from '@angular/core';
import { FwLoader as Loader } from './loader';

import * as fb from 'firebase';
import { Observable, from } from 'rxjs';

function fromSub<T>(obj, key) {
  return new Observable<T>(s => {
    return { unsubscribe: obj[key](s) };
  });
}

export class Auth {
  state: Observable<fb.User|null>;
  token: Observable<fb.User|null>;
  constructor(private auth: fb.auth.Auth) {
    this.state = fromSub<fb.User>(auth, 'onAuthStateChanged');
    this.token = fromSub<fb.User>(auth, 'onIdTokenChanged');
  }
  create({ email, pass }) {
    return from(this.auth.createUserWithEmailAndPassword(email, pass));
  }
}

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
    // const app = this.ld.getApp(appName);
    // const auth = new Auth(app.auth());
  }
}
