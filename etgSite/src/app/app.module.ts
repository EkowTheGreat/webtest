import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';
import { YoutubeComponent } from './youtube/youtube.component';
import {YouTubePlayerModule} from '@angular/youtube-player'


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {  MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InstagramComponent } from './instagram/instagram.component';
import { DiscordComponent } from './discord/discord.component';
import { TestIdeaComponent } from './test-idea/test-idea.component';
import { BasiliskComponent } from './basilisk/basilisk.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StreamComponent,
    YoutubeComponent,
    InstagramComponent,
    DiscordComponent,
    TestIdeaComponent,
    BasiliskComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatToolbarModule ,
    MatBottomSheetModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    NoopAnimationsModule,
    YouTubePlayerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
