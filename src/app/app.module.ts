import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirebaseCliMod } from './firebase-cli.mod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FirebaseCliMod,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
