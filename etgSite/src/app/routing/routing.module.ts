import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  HomeComponent } from '../home/home.component';
import {  StreamComponent } from '../stream/stream.component';
import{ YoutubeComponent} from '../youtube/youtube.component';


const routes = [
  {
    path: 'https://www.ekowthegreat.co.uk/',
    component: HomeComponent
  },
  {

    path: 'https://www.ekowthegreat.co.uk/stream',
    component: StreamComponent
  },
  {
    path: 'https://www.ekowthegreat.co.uk/youtube',
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
