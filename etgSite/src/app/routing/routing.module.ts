import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  HomeComponent } from '../home/home.component';
import {  StreamComponent } from '../stream/stream.component';
import{ YoutubeComponent} from '../youtube/youtube.component';
import{ InstagramComponent} from '../instagram/instagram.component';


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
    path: 'instagram',
    component: InstagramComponent
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
