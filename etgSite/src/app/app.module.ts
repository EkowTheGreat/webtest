import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatToolbarModule ,
    MatCardModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
