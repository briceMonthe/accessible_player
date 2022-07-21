import { addClassToEl, removeClassToEl, toggleClassToEl, findEl, prependChildToParent, appendChildToParent} from "./operationsClassEl.js";
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
import {createElement, setTextContentFromEL} from "./operationsClassEl.js";

let profileMenu = {
  isDisplayed : false,
  defaultProfile : "Standard",
  selectedProfile : "Standard",
  previousProfile : null,
  isProfileChanged : false,
  isPopupDisplayed : false,
  playPauseObject: null,
  videoSizeObject: null,
  accessMenuObject : null,
  tooltipText: null,
  components: {
    profileContainerEl : null,
    profileBtnEl : null,
    profileMenuEl : null,
  },
  instance : null,
  profiles : [
    { profile : "Vision+", classList : ""},
    { profile : "Sans Vision+", classList : ""},
    { profile : "LSF +", classList : ""},
    { profile : "Concentration +", classList : ""},
    { profile : "Audition +", classList : ""},
    { profile : "Standard", classList : "vjs-selected"}
  ],
  setToolTipText : function( text ){
    this.tooltipText = text;
  },
  setInstance : function( instance ){
    this.instance = instance;
  },
  getInstance : function( components ){
    if( this.instance )
      return this.instance;
    handleProfile( this, components  );
    this.setInstance( this );
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
    this.components = {
      ...this.components,
      ...components
    };
  },
  loadDefaultProfile : function( components ){
    let newProfile = getProfileFromCookie();
    this.playPauseObject = playPauseVideo.getInstance();
    this.videoSizeObject = videoSize.getInstance();
    this.setComponents( components );
    console.log( components );
    this.addEventsToProfileContainerEl( this );

    if( !newProfile || this.defaultProfile === newProfile ){
      updateProfileFromCookie( "profile", this.defaultProfile )
      addProfileContainer( components.volumeContainerEl.el() , components.profileMenuContainerEl, this.defaultProfile );
      selectProfile( this );
      return;
    }
    this.changeProfile( newProfile, false );
    addProfileContainer( components.volumeContainerEl.el(), components.profileMenuContainerEl, newProfile );
    selectProfile( this );
    this.profiles = this.profiles.map( ( { profile } ) => profile === newProfile ? { profile , classList : "vjs-selected" } : { profile , classList : "" }  );
  },
  addEventsToProfileContainerEl : function( instance )  {
    let { profileMenuEl, profileMenuBtnEl, tooltipEl, profileMenuContainerEl } = instance.components;

    $( profileMenuContainerEl ).on("pointerenter click pointerleave", function(e) {
      switch ( e.type ) {
        case "click":
          toggleClassToEl( tooltipEl, "vjs-tooltip-hide");
          toggleClassToEl( this, "vjs-menu-button-popup-hide" );
          break;
        case "pointerleave":
          addClassToEl( this, "vjs-menu-button-popup-hide" )
          break;
        case "pointerenter":
          addClassToEl( this, "vjs-menu-button-popup-hide" );
          $(tooltipEl).is(".vjs-tooltip-hide") ? removeClassToEl( tooltipEl, "vjs-tooltip-hide" ) : null;
          break;
      }

    });

    $( profileMenuEl ).on("click", function(e){
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

    $("#player-profile-container li.vjs-menu-item").on("click", function(e){
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
    });

    $( profileMenuBtnEl ).on( "pointerenter click" , function(e){
      setTimeout(function(){
        profileMenuBtnEl.attr("title", "");
        instance.setToolTipText( profileMenuBtnEl.controlText_ || $(profileMenuBtnEl).data("title") );
        setTextContentFromEL( tooltipEl, instance.toolTipText || $(profileMenuBtnEl).data("title") );
      }, 2)
    })
  }
}


const handleProfile = ( instance, { videoEl, accessPlayer} ) => {
  let volumeContainerEl = accessPlayer.controlBar.volumePanel;
  let profileMenuContainerEl = $("#player-profile-container");
  let profileMenuBtnEl = profileMenuContainerEl.find("button");
  let profileMenuEl = profileMenuContainerEl.find(".vjs-menu");
  let tooltipEl = createElement("div", { class: "vjs-tooltip" });
  appendChildToParent( profileMenuBtnEl, tooltipEl );

  instance.loadDefaultProfile({ videoElement: videoEl , volumeContainerEl, profileMenuContainerEl, profileMenuBtnEl, profileMenuEl, tooltipEl } );
}

const addDefaultSelectedProfile = ( profileContainerEl, defaultProfile ) => {
  profileContainerEl.find("li").each( (index, el ) => $(el).data("profile")=== defaultProfile ? $(el).addClass("vjs-selected") : $(el).removeClass("vjs-selected") ) ;
}

const addProfileContainer = ( prevEl, childEl, defaultProfile  ) => {
  addDefaultSelectedProfile( childEl, defaultProfile );
  $( prevEl ).after( childEl );
}


const selectProfile = ( { profiles, videoSizeObject,  previousProfile, selectedProfile, accessMenuObject, playPauseObject } ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileObjectToMap( profiles, "profile");
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


const resetPreviousProfile = ( {profiles, videoSizeObject,  previousProfile, selectedProfile, accessMenuObject, playPauseObject } ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileObjectToMap( profiles, "profile")
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

  $("#transcript").toggleClass("transcript--hide");
  prependChildToParent( videoSize.components.containerRight, $("#transcript") );
}


const selectStandardProfile = ( selectedProfile, standard, accessMenuObject, classNameEl  ) => {
  if( !accessMenuObject )
    selectedProfile === standard ? addClassToEl( $(".access-menu"), classNameEl) : removeClassToEl( $(".access-menu"), classNameEl );
}


export { profileMenu };


