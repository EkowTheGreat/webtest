import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

    //document.body.appendChild(tag);
    //this.onYouTubeIframeAPIReady();

    

    

  }
  startVideo(){

    console.log('working');

    this.reframed=false;
    this.player = new window['YT'].Player('player', {
      
      videoId: 'LX_SF401dRY',
      
      height:4000,
      width:4000,
      
      playerVars: {
        showinfo:0,
        controls: 0,
        playsinline: 1,
       autoplay: 1,
       
      },
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this),
      }
      
    });
    //this.onPlayerReady(Event e);

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
        console.log('started '+ this.cleanTime());
      }
      else{
        console.log('playing '+ this.cleanTime());
        //this.startVideo();
      }
    case window['YT'].PlayerState.ENDED :
      {
        if(this.cleanTime()>0)
        {
          console.log('ok k cool')//
          this.player.seekTo(0);
          
        }
        
        
      }
  }
}

cleanTime(){
  return Math.round(this.player.getCurrentTime())
}


  

}

