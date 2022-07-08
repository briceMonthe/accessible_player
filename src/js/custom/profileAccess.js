import { addClassToEl, removeClassToEl, toggleClassToEl , setTextContentFromEL} from "./operationsClassEl.js";
import {getProfileFromCookie, updateProfileFromCookie, getProfileMap } from "./third-party-api.js";
import {
  updateTranscriptComponent,
  updateCaptionsSubtitlesComponent,
  updateAudioDescriptionComponent,
  updateAccessMenuProfileComponent,
  updateContrastComponent,
  updateLSFTranscriptComponent
} from "./component-api.js";

const profileAccess = {
  isDisplayed : false,
  defaultProfile : "Standard",
  selectedProfile : "Standard",
  previousProfile : null,
  isProfileChanged : false,
  isPopupDisplayed : false,
  components: {
    profileContainerEl : null,
    profileBtnEl : null,
    profileMenuEl : null,
  },
  displayPopup : function ( state ) {
    this.isPopupDisplayed = state;
  },
  changeProfile : function ( newProfile, isProfileChanged = true ) {
    if( newProfile === this.selectedProfile ){
      this.isProfileChanged = false;
      return;
    }
    this.isProfileChanged = isProfileChanged;
    this.defaultProfile = newProfile;
    this.previousProfile = this.selectedProfile;
    this.selectedProfile = newProfile;
    updateProfileFromCookie( newProfile );
    updateAccessMenuProfileComponent( $("#profiles") , "vjs-selected", this.selectedProfile);
  },
  displayMenu : function ( state ) {
    this.isDisplayed = state;
  },
  loadDefaultProfile : function(  ){
    let newProfile = getProfileFromCookie();
    if( !newProfile || this.defaultProfile === newProfile ){
      updateProfileFromCookie( this.defaultProfile )
      selectProfile( undefined, this );
      return;
    }
    this.changeProfile( newProfile, false );
    this.profiles = this.profiles.map( ( { profile } ) => profile === newProfile ? { profile , classList : "vjs-selected" } : { profile , classList : "" }  );
    selectProfile( undefined, this );
  },
  loadProfiles : function(){
    /**
     * Ici on charge les differents profils selon le langage de la page HTML
     */
  },
  resetPreviousProfile : () => resetPreviousProfile,
  selectProfile : () => selectProfile,
  profiles : [
    { profile : "Vision+", classList : ""},
    { profile : "Sans Vision+", classList : ""},
    { profile : "LSF +", classList : ""},
    { profile : "Concentration +", classList : ""},
    { profile : "Audition +", classList : ""},
    { profile : "Standard", classList : "vjs-selected"}
  ]
}

const addDefaultSelectedProfile = ( { defaultProfile, components : { profileContainerEl } } ) => {
  profileContainerEl.find("li").each( (index, el ) => $(el).data("profile")=== defaultProfile ? $(el).addClass("vjs-selected") : $(el).removeClass("vjs-selected") ) ;
}

const addProfileContainer = ( parentEl = ".vjs-volume-panel" ) => {
  profileAccess.loadDefaultProfile();
  profileAccess.components.profileContainerEl = $("#player-profile-container");
  addDefaultSelectedProfile( profileAccess );
  $( parentEl ).after( $( profileAccess.components.profileContainerEl ) );
}


const selectProfile = ( playerEl, { selectedProfile } ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileMap( profileAccess.profiles, "profile");
  switch ( selectedProfile ) {
    case visionPlus :
      selectVisionPlusProfile( playerEl );
      break;
    case noVisionPlus :
      selectNoVisionPlusProfile( playerEl );
      break;
    case auditionPlus :
      selectAuditionPlusProfile("audition-plus");
      break;
    case lsfPlus :
      selectLSFPlusProfile( "show" );
      break;
    case concentrationPlus :
      selectConcentrationPlusProfile( "show" );
      break;
    case standard :
      selectStandardProfile({selectedProfile : selectedProfile} );
      break;
    default:
      console.log("Autre esseai")
      break;
  }
}


const selectVisionPlusProfile = ( playerEl = $("#video_access_html5_api"), className = "vision-plus--default" ) => {
  toggleClassToEl(playerEl, className);
  updateContrastComponent();
}


const selectNoVisionPlusProfile = ( audioDescEl ) => {

  updateAudioDescriptionComponent( audioDescEl );

}

const selectAuditionPlusProfile = ( ) => {
  updateCaptionsSubtitlesComponent( "audition-plus");
  updateTranscriptComponent("audition-plus");
}


const selectLSFPlusProfile = ( state =  "hide", className =  "profile-container--hide") => {

  updateLSFTranscriptComponent( state, className, "#lsf-plus", ".container__right")

}


const selectConcentrationPlusProfile = ( state =  "hide", className =  "profile-container--hide" ) => {
  updateLSFTranscriptComponent( state, className, "#concentration-plus", ".container__left")


}


const selectStandardProfile = ( { selectedProfile } , accessMenuEl = $(".access-menu"), className = "access-menu--hide" ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileMap( profileAccess.profiles, "profile");
  selectedProfile === standard ? addClassToEl( accessMenuEl, className) : removeClassToEl( accessMenuEl, className );
}


const resetPreviousProfile = ( playerEl , { previousProfile, selectedProfile } ) => {
  let [visionPlus, noVisionPlus, lsfPlus, concentrationPlus, auditionPlus, standard ] = getProfileMap( profileAccess.profiles, "profile")
  switch ( previousProfile ) {
    case visionPlus :
      selectVisionPlusProfile( playerEl );
      break;
    case noVisionPlus :
      selectNoVisionPlusProfile( playerEl );
      break;
    case auditionPlus:
      selectAuditionPlusProfile( "audition-plus");
      break;
    case lsfPlus :
      selectLSFPlusProfile("hide");
      break;
    case concentrationPlus :
      selectConcentrationPlusProfile( "hide" );
      break;
    case standard :
      selectStandardProfile({ selectedProfile : selectedProfile } );
      break;
  }
};


const addEventsToProfileContainerEl = () => {
  $(".vjs-menu").on("click", function(e){
    switch (e.type) {
      case "click":
        addClassToEl( this, "vjs-menu-block");
        profileAccess.displayMenu( true );
        break;
    }
  })

  $(".vjs-menu-content").on("pointerleave", function(e){
    switch (e.type) {
      case "pointerleave":
        removeClassToEl( $(this).parent(), "vjs-menu-block");
        profileAccess.displayMenu( false );
        break;
    }
  })

  $("li.vjs-menu-item").on("click", function(e){
    switch (e.type) {
      case "click":
        removeClassToEl(  $(this).parent().find("li"), "vjs-selected");
        addClassToEl( $(this), "vjs-selected" );

        profileAccess.changeProfile( $(this).data("profile")  );
        if( profileAccess.isProfileChanged ){
          resetPreviousProfile( undefined , profileAccess  );
          selectProfile( undefined, profileAccess );
        }

        break;
    }
  })
}


const handleProfile = () => {
  addProfileContainer();
  addEventsToProfileContainerEl();
}


export { handleProfile };


