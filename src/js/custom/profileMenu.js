import { addClassToEl, removeClassToEl, toggleClassToEl, findEl, prependChildToParent, appendChildToParent} from "./operationsClassEl.js";
import {getProfileFromCookie, updateProfileFromCookie, getProfileObjectToMap } from "./third-party-api.js";
import {
  updateTranscriptComponent,
  updateCaptionsSubtitlesComponent
} from "./component-api.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";
import {videoSize} from "./handleVideoSize.js";
import {createElement, setTextContentFromEL} from "./operationsClassEl.js";
import {transcriptVideo} from "./transcriptVideo.js";
import {accessMenu} from "./handle-access-menu.js";

let profileMenu = function(){
  return {
    isDisplayed : false,
    defaultProfile : "Standard",
    selectedProfile : "Standard",
    previousProfile : null,
    isProfileChanged : false,
    isPopupDisplayed : false,
    playPauseObject: null,
    videoSizeObject: null,
    accessMenuObject : null,
    transcriptVideo: null,
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
      return this;
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

      resetPreviousProfile( this );
      selectProfile( this );
      let { profileMenuEl } = this.components;
      this.updateProfileMenuStyle( profileMenuEl, newProfile );

      updateProfileFromCookie( "profile" , newProfile );
      //updateAccessMenuProfileComponent( $("#profiles") , "vjs-selected", this.selectedProfile);
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
    loadDefaultProfile : async function( components ){
      let newProfile = getProfileFromCookie();
      this.playPauseObject = await playPauseVideo.getInstance();
      this.videoSizeObject = videoSize.getInstance();
      this.transcriptVideo = await transcriptVideo.getInstance();
      this.setComponents( components );
      prependChildToParent( this.videoSizeObject.components.containerRight, this.transcriptVideo.components.wrapperTranscript );

      this.addEventsToProfileContainerEl( this );

      if( !newProfile || this.defaultProfile === newProfile ){
        updateProfileFromCookie( "profile", this.defaultProfile )
        addProfileContainer( components.volumeContainerEl.el() , components.profileMenuContainerEl, this.defaultProfile );
        selectProfile( this );
        return;
      }
      this.changeProfile( newProfile, false );
      addProfileContainer( components.volumeContainerEl.el(), components.profileMenuContainerEl, newProfile );
      //selectProfile( this );
      this.profiles = this.profiles.map( ( { profile } ) => profile === newProfile ? { profile , classList : "vjs-selected" } : { profile , classList : "" }  );
    },
    updateProfileMenuStyle : function ( parentEl, dataProfile ){
      let liItems = findEl( parentEl, "li");
      liItems.each( (index, elemnt) => $(elemnt).data("profile") !== dataProfile ? removeClassToEl( elemnt , "vjs-selected") :  addClassToEl( elemnt, "vjs-selected" ) );
      //removeClassToEl( liItems , "vjs-selected");
      //addClassToEl( elmnt, "vjs-selected" );
    },
    addEventsToProfileContainerEl : function( instance )  {
      let { profileMenuEl, profileMenuBtnEl, tooltipEl, profileMenuContainerEl } = instance.components;

      $( profileMenuContainerEl ).on("pointerenter click pointerleave", function(e) {

        switch ( e.type ) {
          case "click":
            toggleClassToEl( tooltipEl, "vjs-tooltip-hide");
            toggleClassToEl( this, "vjs-menu-button-popup-hide" );
            //profileMenuEl.trigger("click");
            //toggleClassToEl( profileMenuEl, "vjs-menu-block");
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
            //instance.displayMenu( true );
            break;
        }
      });

      $(".vjs-menu-content").on("pointerleave click", function(e){

        switch (e.type) {
          case "pointerleave":
            removeClassToEl( $(this).parent(), "vjs-menu-block");
            //instance.displayMenu( false );
            break;
          case "click":
            console.log("none")
            break;
        }
      });

      $( profileMenuEl ).find("li").on("click", function(e){
        switch (e.type) {
          case "click":
            //instance.updateProfileMenuStyle( $(this).parent(), $(this).data("profile") );
            instance.changeProfile( $(this).data("profile"), true  );
            if( instance.isProfileChanged ){
              accessMenu.updateProfile( instance.selectedProfile );
              //resetPreviousProfile( instance  );
              //selectProfile( instance );
            }
            break;
        }
      });

      $( profileMenuBtnEl ).on( "pointerenter click" , function(e){
        setTimeout(function(){
          profileMenuBtnEl.attr("title", "");
          instance.setToolTipText( profileMenuBtnEl.controlText_ || $(profileMenuBtnEl).data("title") );
          setTextContentFromEL( tooltipEl, instance.toolTipText || $(profileMenuBtnEl).data("title") );
        }, 2);

        switch (e.type) {
          case "click":
            break;
        }
      })
    },
  }
} ()


const handleProfile = ( instance, { videoEl, accessPlayer} ) => {
  let volumeContainerEl = accessPlayer.controlBar.volumePanel;
  let profileMenuContainerEl = $("#player-profile-container");
  let profileMenuBtnEl = profileMenuContainerEl.find("button");
  let profileMenuEl = profileMenuContainerEl.find(".vjs-menu");
  let tooltipEl = createElement("div", { class: "vjs-tooltip" });
  appendChildToParent( profileMenuBtnEl, tooltipEl );

  instance.loadDefaultProfile({ videoElement: videoEl , volumeContainerEl, profileMenuContainerEl, profileMenuBtnEl, profileMenuEl, tooltipEl } );
}

const   addDefaultSelectedProfile = ( profileContainerEl, defaultProfile ) => {
  profileContainerEl.find("li").each( (index, el ) => $(el).data("profile")=== defaultProfile ? $(el).addClass("vjs-selected") : $(el).removeClass("vjs-selected") ) ;
}

const addProfileContainer = ( prevEl, childEl, defaultProfile  ) => {
  addDefaultSelectedProfile( childEl, defaultProfile );
  $( prevEl ).after( childEl );
}


const selectProfile = ( { profiles, videoSizeObject, transcriptVideo,  previousProfile, selectedProfile, accessMenuObject, playPauseObject } ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileObjectToMap( profiles, "profile");
  if( videoSizeObject.isVideoContrast ){
    selectVisionPlusProfile( videoSizeObject );
  }
  switch ( selectedProfile ) {
    case visionPlus :
      selectVisionPlusProfile( videoSizeObject );
      break;
    case noVisionPlus :
      selectNoVisionPlusProfile("enabled" );
      break;
    case auditionPlus :
      selectAuditionPlusProfile(accessMenuObject);
      break;
    case lsfPlus :
      selectLSFPlusProfile("enabled",  videoSizeObject, playPauseObject.components.bigPlayContainerEl,  playPauseObject.components.previousElToBigPlayContainer,  "show",   "profile-container--hide" );
      break;
    case concentrationPlus :
      selectConcentrationPlusProfile("enabled", videoSizeObject, transcriptVideo, playPauseObject.components.bigPlayContainerEl,  playPauseObject.components.previousElToBigPlayContainer, "show", "profile-container--hide" );
      break;
    case standard :
      selectStandardProfile( selectedProfile );
      break;
    default:
      console.log("Autre Profil");
      break;
  }
}


const resetPreviousProfile = ( { profiles, videoSizeObject,transcriptVideo,  previousProfile, selectedProfile, accessMenuObject, playPauseObject } ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileObjectToMap( profiles, "profile");
  switch ( previousProfile ) {
    case visionPlus :
      selectVisionPlusProfile( videoSizeObject );
      break;
    case noVisionPlus :
      selectNoVisionPlusProfile( "disabled" );
      break;
    case auditionPlus:
      selectAuditionPlusProfile( accessMenuObject );
      break;
    case lsfPlus :
      selectLSFPlusProfile( "disabled", videoSizeObject,playPauseObject.components.bigPlayContainerEl,  playPauseObject.components.previousElToBigPlayContainer,  "hide",   "profile-container--hide" );
      break;
    case concentrationPlus :
      selectConcentrationPlusProfile("disabled",  videoSizeObject, transcriptVideo, playPauseObject.components.bigPlayContainerEl,  playPauseObject.components.previousElToBigPlayContainer,  "hide",   "profile-container--hide" );
      break;
    case standard :
      selectStandardProfile( selectedProfile );
      break;
  }
};


const selectVisionPlusProfile = ( videoSizeObject  ) => {
  accessMenu.updateContrast( videoSizeObject.isVideoContrast ? "contrast" : "normal" );
  videoSizeObject.contrastVideo();
}


const selectNoVisionPlusProfile = ( audioDescMode ) => {
  accessMenu.updateAudioDesc( audioDescMode  );
}

const selectAuditionPlusProfile = ( accessMenuObject  ) => {
  if( !accessMenuObject ){
    updateCaptionsSubtitlesComponent( "audition-plus");
    updateTranscriptComponent("audition-plus");
  }
}


const selectLSFPlusProfile = (lsfMode, videoSize, bigPlayPauseContainerEl,  previousElFromBigPlayContainerEl,  state, className) => {
  videoSize.switchToLSFPlusProfile( bigPlayPauseContainerEl, previousElFromBigPlayContainerEl, state, className );
  accessMenu.updateLSF( lsfMode );
}


const selectConcentrationPlusProfile = (transcriptMode, videoSize, transcriptVideo, bigPlayPauseContainerEl,  previousElFromBigPlayContainerEl,  state, className) => {
  videoSize.switchToConcentrationPlusProfile( bigPlayPauseContainerEl, previousElFromBigPlayContainerEl, state, className );
  transcriptVideo.displayWrapperTranscript( "transcript--hide" );
  accessMenu.updateTranscript( transcriptMode );
}


const selectStandardProfile = ( selectedProfile ) => {
  /*if( !accessMenuObject )
    selectedProfile === standard ? addClassToEl( $(".access-menu"), classNameEl) : removeClassToEl( $(".access-menu"), classNameEl );*/

  accessMenu.displayAccessMenu( selectedProfile );

}


export { profileMenu };
