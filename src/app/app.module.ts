import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { FwCliMod, FwAuth, FwLoader } from '@mod/fw';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '@mod/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FwCliMod.forRoot(env.firebase, [
      { provide: APP_INITIALIZER, useFactory: FwLoader.init, deps: [FwLoader], multi: true },
      { provide: APP_INITIALIZER, useFactory: FwAuth.init, deps: [FwAuth], multi: true },
    ]),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
