import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTimeComponent } from './get-time/get-time.component';
import { ShowTimeComponent } from './show-time/show-time.component';

@NgModule({
  declarations: [
    AppComponent,
    GetTimeComponent,
    ShowTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
