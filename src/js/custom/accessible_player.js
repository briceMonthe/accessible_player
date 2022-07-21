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
    clearInterval( repeat_call );
  }

}, 200)
let accessPlayer ;
const start = async () => {
  accessPlayer = videojs("#video_access");
  console.log( accessPlayer.src() )
  let videoEl = accessPlayer.children().at(0);
  accessPlayer.src({
    src : $(videoEl).prop("src"),
    type: "video/mp4"
  })
  console.log( accessPlayer.src() )
  await transcriptVideo.getInstance( accessPlayer );
  //handleTranscript(  );

  const volumePanel = accessPlayer.controlBar.volumePanel;
  console.log( accessPlayer );
  handleFullscreen();
  playPauseVideo.getInstance( { accessPlayer, videoEl });
  profileMenu.getInstance( { accessPlayer, videoEl } );
  volumePlayer.getInstance( {videoElement: videoEl ,  volumePanel  });
  //captionsVideo.getInstance( { accessPlayer } );
  addAccessMenu();

}

