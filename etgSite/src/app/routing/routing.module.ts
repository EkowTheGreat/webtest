import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  HomeComponent } from '../home/home.component';
import {  StreamComponent } from '../stream/stream.component';
import{ YoutubeComponent} from '../youtube/youtube.component';
import{ InstagramComponent} from '../instagram/instagram.component';
import {DiscordComponent} from '../discord/discord.component';
import {TestIdeaComponent} from '../test-idea/test-idea.component'
import { BasiliskComponent } from '../basilisk/basilisk.component';




const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {

    path: 'stream',
    component: StreamComponent
  },
  {
    path: 'youtube',
    component: YoutubeComponent
  },
  {
    path: 'discord',
    component: DiscordComponent
  },
  {
    path: 't',
    component: TestIdeaComponent
  },
  {
    path: 'basilisk',
    component: BasiliskComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
