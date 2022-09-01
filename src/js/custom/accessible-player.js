import {playPauseVideo} from "./handlePlayPauseVideo.js";
import {profileMenu} from "./profileMenu.js";
import {volumePlayer} from "./handleVolume.js";
import {captionsVideo} from "./handleCaptions.js";
import {transcriptVideo} from "./transcriptVideo.js";
import {fullscreenPlayer} from "./handleFullscreen.js";
import {accessMenu} from "./handleAccessMenu.js";

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

    //$('head').append('<link rel="stylesheet" type="text/css" href="src/css/build/video-js-extendss.css">');
    playPauseVideo.getInstance( { accessPlayer , videoEl });
    profileMenu.getInstance( { accessPlayer , videoEl } );
    volumePlayer.getInstance( {videoElement: videoEl ,  volumePanel  });
    fullscreenPlayer.getInstance( accessPlayer );
    captionsVideo.getInstance( { accessPlayer } );
    accessMenu.getInstance( accessPlayer );
  });
  console.log( accessPlayer );


}

//start();


/*
console.log( $("head"))

const addLink = function(url, rel){
  let linkCss = document.createElement( "link");
  linkCss.setAttribute("rel", "stylesheet");
  linkCss.setAttribute( "src", "src/css/build/video-js-extendss.css");
  linkCss.setAttribute("type", "text/css");
  console.log( linkCss );
  $("head").prepend( $(linkCss) );
}

window.addEventListener("load", function(){
  addLink();
});
*/



