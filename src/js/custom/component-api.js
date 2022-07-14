import {addClassToEl, removeClassToEl, setTextContentFromEL, toggleClassToEl, addChildAfterEl, appendChildToParent, prependChildToParent} from "./operationsClassEl.js";

const updateAudioDescriptionComponent = ( El = $("#audioDesc") ) => {
  if( El.is( ".settings-menu-btn-noVisionPlus" ) ){
    setTextContentFromEL( El.find(".settings-menu-btn-text").eq(0), "Activer L'audiodescription" );
  }else{
    setTextContentFromEL( El.find(".settings-menu-btn-text").eq(0), "Ôter L'audiodescription" );
  }
  toggleClassToEl( El, "settings-menu-btn-noVisionPlus");

}


const updateContrastComponent = ( El = $("#contrast-btn" ) ) => {
  if( $("#video_access_html5_api").is( ".vision-plus--default" ) ){
    setTextContentFromEL( El.find(".access-menu-btn-text").eq(0), "Vidéo Contrastée" );
  }else{
    setTextContentFromEL( El.find(".access-menu-btn-text").eq(0), "Vidéo normale" );
  }
}


const updateCaptionsSubtitlesComponent = ( className = "audition-plus", El = $(".vjs-text-track-display") ) => {
  toggleClassToEl( El, className );
};


const updateTranscriptComponent = ( className = "audition-plus", El = $(".vjs-transcript-display") ) => {
  toggleClassToEl( El, className );
};

const updateAccessMenuProfileComponent = ( El = $("#profiles") , className = "vjs-selected", selectedProfile ) => {
  removeClassToEl( El.children(), className );
  El.find(".profils-menu-btn")
    .each(
      (index, el ) => $(el).data("profile") === selectedProfile
        ? addClassToEl($(el), "vjs-selected") : null );
};

const createMoveSeparator = (parent) => {
  let [ containerLeft, containerRight ] = document.querySelectorAll(`#${ parent} .container__side`);
  let btn = document.querySelector(`#${parent} .container__btn.container__btn-resize`);
  btn.draggable = true;
  btn.onmousedown = function(event) {
    let shiftX = event.clientX - btn.getBoundingClientRect().left;
    moveAt(event);

    function moveAt( { pageX } ) {
      let dimBtn = btn.getBoundingClientRect();
      let dimContainerLeft = containerLeft.getBoundingClientRect();
      let dimContainerRight = containerRight.getBoundingClientRect();
      let dX = pageX - shiftX - dimContainerLeft.left - dimContainerLeft.width ;
      if( dimContainerRight.width < dimBtn.width + dX ){
        return;
      }
      let containerLeftEl = $(".container__left");
      let widthLeft = containerLeftEl.css("width");
      let newWidth = extractValue(widthLeft, "px") + dX;
      containerLeftEl.css("width",  newWidth );
    }

    function onMouseMove(event) {
      moveAt(event);
    }

    // move the ball on mousemove
    btn.addEventListener('mousemove', onMouseMove);

    // drop the ball, remove unneeded handlers
    btn.onmouseup = function() {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.onmouseup = null;
    };

    btn.onmouseleave = function() {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.onmouseup = null;
    };
  };

  function extractValue( stringSize, splitChar ){
    return parseFloat( stringSize.split( splitChar )[0] );

  }

  btn.ondragstart = function() {
    return false;
  };
}

const createTwoAsideContainers = ( videoAccessEl, bigPlayPauseContainerEl,  previousElFromBigPlayContainerEl , state, className , containerEl,  newVideoContainerEl, id  ) => {
  let profileContainerEl = containerEl;
  let videoContainerEl = $("#video_access.video-js");
  if( state !== "hide" ){
    profileContainerEl = $(profileContainerEl).find( newVideoContainerEl ).prepend( videoAccessEl ).parent();
    removeClassToEl( profileContainerEl, className)
    prependChildToParent( videoContainerEl, profileContainerEl );
    profileContainerEl.prop("id", id)
    createMoveSeparator( id );
    addVideoSign();
  }

  if( state === "hide" ){
    addClassToEl( profileContainerEl, className)
    prependChildToParent( videoContainerEl, videoAccessEl );
  }

  if( $(containerEl).find(bigPlayPauseContainerEl).length ){
    addChildAfterEl( $( previousElFromBigPlayContainerEl ), $(".big-play-container") )
  }else{
    appendChildToParent( $( `#${ $(containerEl).prop("id") } .container__left` ),  $(bigPlayPauseContainerEl) );
  }

}

const addVideoSign = () => {
  let accesPlayer = videojs("#video_access");
  console.log( accesPlayer )

  /**
   * Add Sign Video After Original Video
   */
  let videoAccess = accesPlayer.children_.at( 0 );
  //$( videoAccess ).css("width", "50%");
  accesPlayer.signVideo = $(videoAccess).clone(true, true);
  let signId = videoAccess.id;
  //accesPlayer.signVideo.attr( "id", `sign-${ signId }`).css({ left: "initial", right : 0, backgroundColor: "#3c3c3c" } );
  accesPlayer.signVideo.attr( "id", `sign-${ signId }` );
  //$( videoAccess ).after( accesPlayer.signVideo );
  prependChildToParent( "#lsf-plus .container__left", accesPlayer.signVideo );

  /**
   * Change the src of the Access Video
   */
  const srcElement = $(accesPlayer.signVideo).find("source");
  srcElement.attr("src", srcElement.data("signSrc") );
  $(accesPlayer.signVideo).attr("src", srcElement.data("signSrc") );

  $(videoAccess).on("playing pause seeked timeupdate ended seeking volumechange", async function(e) {
    switch ( e.type ) {
      case "playing":
        accesPlayer.signVideo.get(0).play()
        break;
      case "pause":
        accesPlayer.signVideo.get(0).pause();
        break;
      case "seeked":
        break;
      case "timeupdate":
        break;
      case "seeking":
        accesPlayer.signVideo.get(0).currentTime = videoAccess.currentTime;
        break;
      case "volumechange":
        [ accesPlayer.signVideo.get(0).volume, accesPlayer.signVideo.get(0).muted ]  = [ videoAccess.volume, videoAccess.muted ];
        break;

    }
  })
}

export {
  updateContrastComponent,
  updateAccessMenuProfileComponent,
  updateAudioDescriptionComponent,
  updateCaptionsSubtitlesComponent,
  updateTranscriptComponent,
}
