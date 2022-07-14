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
let accesPlayer ;
const start = () => {
  accesPlayer = videojs("#video_access");
  console.log( accesPlayer );
  handleFullscreen();
  //handlePlayPauseVideo();
  playPauseVideo.getInstance();
  //handleProfile();
  profileAccess.getInstance();

  handleMenuPopup();
  handlePopupTooltip();
  addAccessMenu();

}







