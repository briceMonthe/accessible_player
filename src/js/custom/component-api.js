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
  if( $("#video_access").is( ".vision-plus--default" ) ){
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

export {
  updateContrastComponent,
  updateAccessMenuProfileComponent,
  updateAudioDescriptionComponent,
  updateCaptionsSubtitlesComponent,
  updateTranscriptComponent,
}
