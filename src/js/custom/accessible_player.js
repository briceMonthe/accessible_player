import {handleFullscreen} from "./handleFullscreen.js";
import {addAccessMenu} from "./handleAccessMenu.js";
import {handleMenuPopup, handlePopupTooltip} from "./handleControlBar.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";
import {profileAccess} from "./profileAccess.js";
import {volumePlayer} from "./handleVolume.js";


let repeat_call = setInterval( function(){
  if( !!videojs ){
    start();
    clearInterval( repeat_call );
  }

}, 200)
let accessPlayer, videoElement ;
const start = function() {
  accessPlayer = videojs("#video_access");
  console.log( accessPlayer )
  videoElement = accessPlayer.children().at(0);
  const volumePanel = accessPlayer.controlBar.volumePanel;
  volumePanel.options_.inline = false;
  console.log( volumePanel.options_.inline )
  handleFullscreen();
  //handlePlayPauseVideo();
  playPauseVideo.getInstance();
  //handleProfile();
  profileAccess.getInstance();
  volumePlayer.getInstance( {videoElement,  volumePanel  })

  handleMenuPopup();
  handlePopupTooltip();
  addAccessMenu();

}







