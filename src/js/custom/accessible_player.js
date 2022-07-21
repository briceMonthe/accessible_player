import {handleFullscreen} from "./handleFullscreen.js";
import {addAccessMenu} from "./handleAccessMenu.js";
import {handleMenuPopup, handlePopupTooltip} from "./handleControlBar.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";
import {profileMenu} from "./profileAccess.js";
import {volumePlayer} from "./handleVolume.js";
import {captionsVideo} from "./handleCaptions.js";
import {transcriptVideo} from "./transcriptVideo.js";


let repeat_call = setInterval( function(){
  if( !!videojs ){
    start();
    console.log("+++++++++")
    console.log( videojs )
    clearInterval( repeat_call );
  }

}, 200)
let accessPlayer ;
const start = async () => {
  accessPlayer = videojs("#video_access");
  await transcriptVideo.getInstance( accessPlayer );
  //handleTranscript(  );
  let videoEl = accessPlayer.children().at(0);
  const volumePanel = accessPlayer.controlBar.volumePanel;
  console.log( accessPlayer );
  handleFullscreen();
  playPauseVideo.getInstance( { accessPlayer, videoEl });
  profileMenu.getInstance( { accessPlayer, videoEl } );
  volumePlayer.getInstance( {videoElement: videoEl ,  volumePanel  });
  //captionsVideo.getInstance( { accessPlayer } );
  addAccessMenu();

}

