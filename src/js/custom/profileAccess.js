import { addClassToEl, removeClassToEl, toggleClassToEl, findEl} from "./operationsClassEl.js";
import {getProfileFromCookie, updateProfileFromCookie, getProfileObjectToMap } from "./third-party-api.js";
import {
  updateTranscriptComponent,
  updateCaptionsSubtitlesComponent,
  updateAudioDescriptionComponent,
  updateAccessMenuProfileComponent,
  updateContrastComponent,
} from "./component-api.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";
import {videoSize} from "./handleVideoSize.js";

let profileAccess = {
  isDisplayed : false,
  defaultProfile : "Standard",
  selectedProfile : "Standard",
  previousProfile : null,
  isProfileChanged : false,
  isPopupDisplayed : false,
  playPauseObject: null,
  videoSizeObject: null,
  accessMenuObject : null,
  components: {
    profileContainerEl : null,
    profileBtnEl : null,
    profileMenuEl : null,
  },
  instance : null,
  getInstance : function(){
    if( this.instance )
      return this.instance;
    handleProfile( this );
    this.instance = this;
    return this.instance;
  },
  changePreviousProfile : function( previousProfile ){
    this.previousProfile = previousProfile;
  },
  changeProfile : function ( newProfile, isProfileChanged = true ) {
    if( newProfile === this.selectedProfile ){
      this.isProfileChanged = false;
      return;
    }
    this.isProfileChanged = isProfileChanged;
    this.defaultProfile = newProfile;
    this.changePreviousProfile( this.selectedProfile );
    this.selectedProfile = newProfile;
    updateProfileFromCookie( "profile" , newProfile );
    updateAccessMenuProfileComponent( $("#profiles") , "vjs-selected", this.selectedProfile);
  },
  displayMenu : function ( state ) {
    this.isDisplayed = state;
  },
  setComponents : function( components ){
    this.components = components;
  },
  loadDefaultProfile : function( profileContainerEl, volumeContainerEl ){
    let newProfile = getProfileFromCookie();
    this.playPauseObject = playPauseVideo.getInstance();
    this.videoSizeObject = videoSize.getInstance();
    let components = {
      profileContainerEl : profileContainerEl,
    }
    this.setComponents( components );
    addEventsToProfileContainerEl( this );

    if( !newProfile || this.defaultProfile === newProfile ){
      updateProfileFromCookie( "profile", this.defaultProfile )
      addProfileContainer( volumeContainerEl, profileContainerEl, this.defaultProfile );
      selectProfile( this );
      return;
    }
    this.changeProfile( newProfile, false );
    addProfileContainer( volumeContainerEl, profileContainerEl, newProfile );
    selectProfile( this );
    this.profiles = this.profiles.map( ( { profile } ) => profile === newProfile ? { profile , classList : "vjs-selected" } : { profile , classList : "" }  );
  },
  profiles : [
    { profile : "Vision+", classList : ""},
    { profile : "Sans Vision+", classList : ""},
    { profile : "LSF +", classList : ""},
    { profile : "Concentration +", classList : ""},
    { profile : "Audition +", classList : ""},
    { profile : "Standard", classList : "vjs-selected"}
  ]
}

const addDefaultSelectedProfile = ( profileContainerEl, defaultProfile ) => {
  profileContainerEl.find("li").each( (index, el ) => $(el).data("profile")=== defaultProfile ? $(el).addClass("vjs-selected") : $(el).removeClass("vjs-selected") ) ;
}

const addProfileContainer = ( prevEl, childEl, defaultProfile  ) => {
  addDefaultSelectedProfile( childEl, defaultProfile );
  $( prevEl ).after( childEl );
}


const selectProfile = ( {videoSizeObject,  previousProfile, selectedProfile, accessMenuObject, playPauseObject } ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileObjectToMap( profileAccess.profiles, "profile");
  switch ( selectedProfile ) {
    case visionPlus :
      selectVisionPlusProfile( playPauseObject.components.videoEl , "vision-plus--default" );
      break;
    case noVisionPlus :
      selectNoVisionPlusProfile( accessMenuObject );
      break;
    case auditionPlus :
      selectAuditionPlusProfile(accessMenuObject);
      break;
    case lsfPlus :
      selectLSFPlusProfile( videoSizeObject, playPauseObject.components.bigPlayContainerEl,  playPauseObject.components.previousElToBigPlayContainer,  "show",   "profile-container--hide" );
      break;
    case concentrationPlus :
      selectConcentrationPlusProfile( videoSizeObject, playPauseObject.components.bigPlayContainerEl,  playPauseObject.components.previousElToBigPlayContainer, "show", "profile-container--hide" );
      break;
    case standard :
      selectStandardProfile( selectedProfile, standard, accessMenuObject, "access-menu--hide" );
      break;
    default:
      console.log("Autre esseai")
      break;
  }
}


const selectVisionPlusProfile = ( videoEl , className  ) => {
  toggleClassToEl(videoEl, className);
  updateContrastComponent();
}


const selectNoVisionPlusProfile = ( accessMenuObject ) => {
  if ( !accessMenuObject )
    updateAudioDescriptionComponent( );
  else
    accessMenuObject.updateAudioDescriptionComponent();
}

const selectAuditionPlusProfile = ( accessMenuObject  ) => {
  if( !accessMenuObject ){
    updateCaptionsSubtitlesComponent( "audition-plus");
    updateTranscriptComponent("audition-plus");
  }
}


const selectLSFPlusProfile = (videoSize, bigPlayPauseContainerEl,  previousElFromBigPlayContainerEl,  state, className) => {
  videoSize.switchToLSFPlusProfile( bigPlayPauseContainerEl, previousElFromBigPlayContainerEl, state, className );
}


const selectConcentrationPlusProfile = (videoSize, bigPlayPauseContainerEl,  previousElFromBigPlayContainerEl,  state, className) => {
  videoSize.switchToConcentrationPlusProfile( bigPlayPauseContainerEl, previousElFromBigPlayContainerEl, state, className );
}


const selectStandardProfile = ( selectedProfile, standard, accessMenuObject, classNameEl  ) => {
  if( !accessMenuObject )
    selectedProfile === standard ? addClassToEl( $(".access-menu"), classNameEl) : removeClassToEl( $(".access-menu"), classNameEl );
}


const resetPreviousProfile = ( {videoSizeObject,  previousProfile, selectedProfile, accessMenuObject, playPauseObject } ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileObjectToMap( profileAccess.profiles, "profile")
  switch ( previousProfile ) {
    case visionPlus :
      selectVisionPlusProfile( playPauseObject.components.videoEl, "vision-plus--default" );
      break;
    case noVisionPlus :
      selectNoVisionPlusProfile( accessMenuObject );
      break;
    case auditionPlus:
      selectAuditionPlusProfile( accessMenuObject );
      break;
    case lsfPlus :
      selectLSFPlusProfile( videoSizeObject,playPauseObject.components.bigPlayContainerEl,  playPauseObject.components.previousElToBigPlayContainer,  "hide",   "profile-container--hide" );
      break;
    case concentrationPlus :
      selectConcentrationPlusProfile( videoSizeObject,playPauseObject.components.bigPlayContainerEl,  playPauseObject.components.previousElToBigPlayContainer,  "hide",   "profile-container--hide" );
      break;
    case standard :
      selectStandardProfile(selectedProfile, previousProfile, accessMenuObject, "access-menu--hide" );
      break;
  }
};


const addEventsToProfileContainerEl = ( instance ) => {
  $(".vjs-menu").on("click", function(e){
    switch (e.type) {
      case "click":
        addClassToEl( this, "vjs-menu-block");
        instance.displayMenu( true );
        break;
    }
  });

  $(".vjs-menu-content").on("pointerleave", function(e){
    switch (e.type) {
      case "pointerleave":
        removeClassToEl( $(this).parent(), "vjs-menu-block");
        instance.displayMenu( false );
        break;
    }
  });

  $("li.vjs-menu-item").on("click", function(e){
    switch (e.type) {
      case "click":
        let liItems = findEl( $(this).parent(), "li");
        removeClassToEl( liItems , "vjs-selected");
        addClassToEl( $(this), "vjs-selected" );
        instance.changeProfile( $(this).data("profile")  );
        if( instance.isProfileChanged ){
          resetPreviousProfile( instance  );
          selectProfile( instance );
        }
        break;
    }
  })
}


const handleProfile = ( instance ) => {
  let volumeContainerEl = $(".vjs-volume-panel" );
  let profileContainerEl = $("#player-profile-container");
  instance.loadDefaultProfile( profileContainerEl, volumeContainerEl );
}


export { profileAccess };


