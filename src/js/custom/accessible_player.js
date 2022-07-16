import {handleFullscreen} from "./handleFullscreen.js";
import {addAccessMenu} from "./handleAccessMenu.js";
import {handleMenuPopup, handlePopupTooltip} from "./handleControlBar.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";
import {profileAccess} from "./profileAccess.js";


let repeat_call = setInterval( function(){
  if( !!videojs ){
    start();
    clearInterval( repeat_call );
  }

}, 200)
let accessPlayer ;
const start = () => {
  accessPlayer = videojs("#video_access");
  let videoEl = accessPlayer.children().at(0);
  console.log( accessPlayer );
  handleFullscreen();
  //handlePlayPauseVideo();
  playPauseVideo.getInstance( { accessPlayer, videoEl });
  //handleProfile();
  profileAccess.getInstance();

  handleMenuPopup();
  handlePopupTooltip();
  addAccessMenu();

}







