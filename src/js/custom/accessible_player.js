import {handleProfile} from "./profileAccess.js";
import {handleFullscreen} from "./handleFullscreen.js";
import {addAccessMenu} from "./handleAccessMenu.js";
import {handleMenuPopup, handlePopupTooltip} from "./handleControlBar.js";


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
  handleProfile();
  handleMenuPopup();
  handlePopupTooltip();
  addAccessMenu();

}







