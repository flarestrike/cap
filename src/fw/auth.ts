import { Injectable } from '@angular/core';

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
  check(email) {
    return from(this.auth.fetchSignInMethodsForEmail(email));
  }
  create({ email, pass }) {
    return from(this.auth.createUserWithEmailAndPassword(email, pass));
  }
  restore({ email, pass }: any = {}) {
    let p: Promise<any>;
    if (email) {
      p = this.auth.signInWithEmailAndPassword(email, pass);
    }
    return from(p);
  }
  destroy() {
    return from(this.auth.signOut());
  }
}
