import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';
import { YoutubeComponent } from './youtube/youtube.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {  MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InstagramComponent } from './instagram/instagram.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StreamComponent,
    YoutubeComponent,
    InstagramComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatToolbarModule ,
    MatBottomSheetModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
