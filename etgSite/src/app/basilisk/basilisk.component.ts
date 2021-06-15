import { Component, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';



@Component({
  selector: 'app-basilisk',
  templateUrl: './basilisk.component.html',
  styleUrls: ['./basilisk.component.scss']
})
export class BasiliskComponent implements OnInit {
  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;

  constructor() {
    var player;
    
    
  }

  ngOnInit(): void {

    
    this.playVid();
  }

  playVid():void{

    

    
    
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = () => this.startVideo();

    

    

    

  }
  startVideo(){

    console.log('working');

    this.reframed=false;
    this.player = new window['YT'].Player('player', {
      
      videoId: 'i1MjBHRae38',
      
      height:4000,
      width:4000,
      
      playerVars: {
        autoplay: 1,
        showinfo:0,
        controls: 0,
        playsinline: 1,
       
       
      },
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this),
      }
      
    });
    

  }
  

   onPlayerReady(event) {
    console.log('Vid ready');
    event.target.playVideo();
    
}


onPlayerStateChange(event) {
  console.log(event);
  switch(event.data){
    case window['YT'].PlayerState.PLAYING:
      if(this.cleanTime() ==0){
        
      }
      else{
        
        
      }
    case window['YT'].PlayerState.ENDED :
      {
        if(this.cleanTime()>0)
        {
          console.log('Ekow The Great Beckons You')
          this.player.seekTo(0);
          
        }
        
        
      }
  }
}

cleanTime(){
  return Math.round(this.player.getCurrentTime())
}


  

}

