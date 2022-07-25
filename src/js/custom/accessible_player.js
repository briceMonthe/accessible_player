import {addAccessMenu} from "./handleAccessMenu.js";
import {handleMenuPopup, handlePopupTooltip} from "./handleControlBar.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";
import {profileMenu} from "./profileAccess.js";
import {volumePlayer} from "./handleVolume.js";
import {captionsVideo} from "./handleCaptions.js";
import {transcriptVideo} from "./transcriptVideo.js";
import {videoSize} from "./handleVideoSize.js";
import {fullscreenPlayer} from "./handleFullscreen.js";


let repeat_call = setInterval( function(){
  if( !!videojs ){
    start();
    clearInterval( repeat_call );
  }

}, 200)
let accessPlayer ;
const start = async function( ){
  accessPlayer = videojs("#video_access");
  let videoEl = accessPlayer.children().at(0);
  const volumePanel = accessPlayer.controlBar.volumePanel;
  // accessPlayer.src({
  //   src : $(videoEl).prop("src"),
  //   type: "video/mp4"
  // })
  accessPlayer.ready(async function(){
    await transcriptVideo.getInstance( this );
    //handleFullscreen();
    playPauseVideo.getInstance( { accessPlayer , videoEl });
    profileMenu.getInstance( { accessPlayer , videoEl } );
    console.log( videoSize.getInstance( ));
    volumePlayer.getInstance( {videoElement: videoEl ,  volumePanel  });
    fullscreenPlayer.getInstance( accessPlayer );
    //captionsVideo.getInstance( { accessPlayer } );
    addAccessMenu( videoSize.getInstance( ) );



  });
  console.log( accessPlayer );


}

