import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  HomeComponent } from '../home/home.component';
import {  StreamComponent } from '../stream/stream.component';


const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {

    path: 'stream',
    component: StreamComponent
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
