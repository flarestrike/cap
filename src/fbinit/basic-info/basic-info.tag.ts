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
      pass: '123456'
    }
  };
  auth: Auth;
  constructor(private ld: FwLoader) {
    const app = ld.getApp('main');
    const auth = new Auth(app.auth());
    auth.state.subscribe(u => {
      this.user = u;
    });
    this.auth = auth;
  }
  signout() {
    this.auth.destroy().subscribe(e => {
      console.log('signed out', e);
      this.user = null;
    });
  }
  signup() {
    this.auth.create(this.data.signup).pipe(
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    ).subscribe(e => {
      console.log('signed up', e);
    });
  }
  signin() {
    this.auth.restore(this.data.signin).subscribe(e => {
      console.log('signed in', e);
    });
    // this.auth.check(this.data.signup.email).subscribe(e => {
    //   console.log('check', e)
    // });
  }
}
