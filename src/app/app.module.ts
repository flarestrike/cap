import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FwCliMod } from '@mod/fw/cli.mod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '@mod/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FwCliMod.forRoot(env.firebase),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
