import { Component } from '@angular/core';
import { FwLoader, Auth } from '@mod/fw';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'cf-basic-info',
  templateUrl: './basic-info.tag.html',
  styleUrls: ['./basic-info.tag.sass']
})
export class CfBasicInfoTag {
  user;
  data = {
    signup: {
      email: 'bmvsc29u@gmail.com',
      pass: '123456'
    },
    signin: {
      email: 'bmvsc29u@gmail.com',
      pass: '1234'
    }
  };
  auth;
  constructor(private ld: FwLoader) {
    const app = ld.getApp('main');
    const auth = new Auth(app.auth());
    auth.state.subscribe(u => {
      this.user = u;
    });
    this.auth = auth;
  }
  signout() {
    console.log('sign out');
  }
  signup() {
    const { email, pass } = this.data.signup;
    this.auth.create({ email, pass }).pipe(
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    ).subscribe(e => {
      console.log('signed up');
    });
  }
  signin() {
    console.log('sign in');
  }
}
