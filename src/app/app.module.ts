import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { FwCliMod, FwApp, FwLoader, fwApps } from '@mod/fw';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '@mod/environments/environment';

const apps: FwApp[] = [{ options: env.firebase, name: 'main' }];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FwCliMod.forRoot([
      { provide: fwApps, useValue: apps },
      { provide: APP_INITIALIZER, useFactory: FwLoader.init, deps: [FwLoader], multi: true }
    ]),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
