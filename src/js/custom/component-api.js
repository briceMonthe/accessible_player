import {addClassToEl, removeClassToEl, setTextContentFromEL, toggleClassToEl} from "./operationsClassEl.js";

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
  console.log( selectedProfile )
  removeClassToEl( El.children(), className );
  El.find(".profils-menu-btn")
    .each(
      (index, el ) => $(el).data("profile") === selectedProfile
        ? addClassToEl($(el), "vjs-selected") : null );
};

const updateLSFComponent = (parent) => {
  let [ containerLeft, containerRight ] = document.querySelectorAll(`${ parent} .container__side`);
  let btn = document.querySelector(`${parent} .container__btn`);
  console.log( btn );
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
      let newWidth = extractValue(widthLeft, "px") + dX + 'px';
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

const updateLSFTranscriptComponent = ( state =  "hide", className =  "profile-container--hide" , idName, newVideoContainerEl  ) => {


  let videoAccessEl = $("#video_access_html5_api");
  let profileContainerEl = $( idName );
  let videoContainerEl = $("#video_access.video-js");
  if( state !== "hide" ){
    profileContainerEl = profileContainerEl.find( newVideoContainerEl ).prepend( videoAccessEl ).parent();
    removeClassToEl( profileContainerEl, className)
    videoContainerEl.prepend( profileContainerEl );
    updateLSFComponent(idName);
    return;
  }

  if( state === "hide" ){
    addClassToEl( profileContainerEl, className)
    videoContainerEl.prepend( videoAccessEl );
    return;
  }
}

export {
  updateContrastComponent,
  updateAccessMenuProfileComponent,
  updateAudioDescriptionComponent,
  updateCaptionsSubtitlesComponent,
  updateTranscriptComponent,
  updateLSFComponent,
  updateLSFTranscriptComponent,
}
