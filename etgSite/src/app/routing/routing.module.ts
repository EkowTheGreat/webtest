import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  HomeComponent } from '../home/home.component';
import {  StreamComponent } from '../stream/stream.component';
import{ YoutubeComponent} from '../youtube/youtube.component';


const routes = [
  {
    path: 'x',
    component: HomeComponent
  },
  {

    path: 'stream',
    component: StreamComponent
  },
  {
    path: '',
    component: YoutubeComponent
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
