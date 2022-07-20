import {handleFullscreen} from "./handleFullscreen.js";
import {addAccessMenu} from "./handleAccessMenu.js";
import {handleMenuPopup, handlePopupTooltip} from "./handleControlBar.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";
import {profileMenu} from "./profileAccess.js";
import {volumePlayer} from "./handleVolume.js";
import {captionsVideo} from "./handleCaptions.js";


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
  const volumePanel = accessPlayer.controlBar.volumePanel;
  console.log( accessPlayer );
  handleFullscreen();
  playPauseVideo.getInstance( { accessPlayer, videoEl });
  profileMenu.getInstance( { accessPlayer, videoEl } );
  volumePlayer.getInstance( {videoElement: videoEl ,  volumePanel  });
  captionsVideo.getInstance( { accessPlayer } );
  addAccessMenu();

}




const handleTranscript = () => {
  let videoAccess = accesPlayer.children_.at( 0 );
  $( videoAccess ).css("width", "50%");

  /**
   * Add Transcript to video player
   */
  accesPlayer.ready(function(){
    // Set up any options.
    let options = {
      showTitle: true,
      autoscroll: true,
      clickArea: 'line',
      followPlayerTrack: true,
      stopScrollWhenInUse: false,
    };

    // Initialize the plugin.
    let transcript = this.transcript(options);
    accesPlayer.transcript = transcript;

    /**
     * Mode the title of Transcript in the transcript body
     */
    setTimeout( () => {
      $(".transcript-body").prepend( $(".transcript-header") );
    }, 300)

    // Then attach the widget to the page.
    let transcriptContainer = $("#transcript .wrapper__transcript"); //document.querySelector('#transcript');
    let transcriptEl = transcript.el();
    let transcriptBodyEl = $( transcriptEl ).find(".transcript-body");
    $(transcriptContainer).append( transcriptBodyEl  );
  });

  $( videoAccess ).after( $("#transcript") );
}

const changeTranscriptLanguage = () => {

}

