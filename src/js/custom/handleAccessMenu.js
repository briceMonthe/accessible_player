import {appendChildToParent, addClassToEl, findEl, removeClassToEl, setTextContentFromEL, toggleClassToEl} from "./operationsClassEl.js";
import {videoSize} from "./handleVideoSize.js";
import {profileMenu} from "./profileAccess.js";
import {captionsVideo} from "./handleCaptions.js";
import {volumePlayer} from "./handleVolume.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";


const accessMenu = {
  instance : null,
  videoResize : null,
  playPauseVideo : null,
  selectedProfile : null,
  selectedTrack : null,
  profileMenu : null,
  components: {
    globalPlayer : null,
    accessMenuEl : null,
    profileEl : null,
    profileChildrenEl : null,
    subtitleMenu : null
  },
  setSelectedTrack : function( selectedTrack ){
    this.selectedTrack = selectedTrack;
  },
  setSelectedProfile : function( selectedProfile ){
    this.selectedProfile = selectedProfile;
  },
  setComponents : function( components ){
    this.components = {
      ...this.components,
      ...components
    };
  },
  setInstance : function( instance ){
    this.instance = instance;
  },
  getInstance : function( globalPlayerEl ){
    if( this.instance )
      return this.instance;

    this.loadAccessMenu( globalPlayerEl );
    this.setInstance( this );
    return this.instance;
  },
  loadAccessMenu : async function( globalPlayer ){
    let accessMenuEl = $(".access-menu");
    let playPauseBtnEl = accessMenuEl.find(".play-pause-btn");
    let backForwardEl = accessMenuEl.find(".menu-back-forward");
    let profileEl = findEl( accessMenuEl, "#profiles");
    let profileChildrenEl = findEl( profileEl, ".menu__btn");
    let subtitleMenu = findEl( accessMenuEl, ".subtitles-menu");
    let volumeMenuEl = findEl( accessMenuEl, ".volume-menu");
    let fullscreenEl = accessMenuEl.find(".menu__btn-fullscreen");
    let speedBtnEl = accessMenuEl.find("#video-speed");
    this.videoResize = videoSize.getInstance();
    this.playPauseVideo = playPauseVideo.getInstance();

    this.appendAccessMenuToPlayer( globalPlayer.el(), accessMenuEl );
    this.setComponents({ globalPlayer, accessMenuEl, profileEl, profileChildrenEl, subtitleMenu, volumeMenuEl, playPauseBtnEl, backForwardEl, fullscreenEl, speedBtnEl });

    this.volumePlayer = await volumePlayer.getInstance();
    this.updateVolumeMenuStyle( this.volumePlayer.getMuted(), "muted" );

    this.captionsVideo = await captionsVideo.getInstance();
    let textTrackList = this.captionsVideo.components.textTrackList ;
    let selectedTrack = this.captionsVideo.selectedTrack;
    this.setSelectedTrack( selectedTrack );
    this.updateCaptionsMenu( textTrackList, selectedTrack );

    this.profileMenu = await profileMenu.getInstance();
    this.updateProfile( this.profileMenu.selectedProfile );

    this.addEventsToAccessMenuEl( this );
  },
  updateCaptionsMenu : function( textTrackList, selectedTrack ){
    let { subtitleMenu } = this.components;
    let translation = {
      "français" : "fr",
      "anglais" : "en",
      "espagnol" : "es",
      "jamaïque" : "ja",
      "malentendant" : "none",
    };
    let langs = [];
    let selectedLang = translation[ selectedTrack.options().label.toLowerCase() ];
    textTrackList.forEach( track => {
      let options = track.options();
      let lang = translation[ options.label.toLowerCase() ];
      if( lang ){
        langs.push( lang );
      }
    });
    subtitleMenu.find(".menu__btn").each( (index, el) => langs.includes( $(el).data("lang") ) || !$(el).data("lang") ? $(el).show() : $(el).hide() );
    if( selectedLang )
      this.updateCaptionsMenuStyle( selectedLang );
  },
  updateCaptionsMenuStyle : function( selectedLang ){
    let { subtitleMenu } = this.components;
    subtitleMenu.find(".menu__btn")
      .each(
        (index, elemnt ) => $(elemnt).data("lang") === selectedLang
          ? addClassToEl( elemnt , "vjs-selected") : removeClassToEl( elemnt , "vjs-selected") );
  },
  appendAccessMenuToPlayer : function( globalPlayer, accessMenu ){
    appendChildToParent( globalPlayer, accessMenu );
  },
  addEventsToAccessMenuEl : function( instance ){
    let { globalPlayer, accessMenuEl, profileChildrenEl, subtitleMenu, volumeMenuEl, playPauseBtnEl, backForwardEl,  fullscreenEl, speedBtnEl } = instance.components;
    let subtitleChildrenEl = subtitleMenu.find(".menu__btn");
    let { textTrackList } = this.captionsVideo.components;

    let translation = {
      "français" : "fr",
      "anglais" : "en",
      "espagnol" : "es",
      "jamaïque" : "ja",
      "malentendant" : "none",
    };

    $( playPauseBtnEl ).on( "click", function(e){
      instance.playPauseVideo.playVideo();
      instance.updatePlayPause();
    });

    document.onfullscreenchange = function(){
      instance.updateFullscreen();
    }

    globalPlayer.on("play", function(e){
      instance.updatePlayPause();
    })

    globalPlayer.on("pause", function(e){
      instance.updatePlayPause();
    })

    fullscreenEl.on("click", function(e){
      let fullscreen = globalPlayer.controlBar.fullscreenToggle;
      fullscreen.handleClick();
      //instance.updateFullscreen();
    });

    backForwardEl.find(" > * ").on( "click", function (e) {
      let typeBtn =$(this).data("type");
      let seekBar = globalPlayer.controlBar.progressControl.seekBar;
      switch ( typeBtn ) {
        case "back":
          seekBar.stepBack();
          break;
        case "forward":
          seekBar.stepForward();
          break;
        default :
          console.log("Exception");
      }
    })

    speedBtnEl.on( "click", function(e){
      let playBackRate = globalPlayer.controlBar.playbackRateMenuButton;
      let textInnerEl = $(this).find(".btn__text-inner");

      if( globalPlayer.defaultPlaybackRate() !== globalPlayer.playbackRate() ){
        setTextContentFromEL( textInnerEl, "Vitesse Normale" );
        globalPlayer.playbackRate( 1.0 );
      }else {
        setTextContentFromEL( textInnerEl, "Vitesse Ralentie" );
        globalPlayer.playbackRate( 0.5 );
      }
      toggleClassToEl( $(this), $(this).data("class") );
    })

    $(".menu__btn").on("click", function(){
      $(this).parent().addClass( $(this).data("class") );
    })

    $(".menu__btn-remove").on("click", function(){
      $(".access-menu").removeClass( $(this).data("class") );
      $(".menu").removeClass( $(this).data("class") );
    });

    subtitleChildrenEl.on( "click", function(e){
      if( $(this).is(".menu__btn-remove") )
        return;
      let lang = $(this).data("lang");
      textTrackList.slice(2).forEach( track => translation[ track.options().label.toLowerCase() ] === lang  ? track.trigger("click") : null );
      instance.updateCaptionsMenuStyle( lang );
    })

    $("#contrast-btn" ).on("click", function(e){
      instance.videoResize.contrastVideo();
    });

    $( profileChildrenEl ).on( "click", function (e) {
      if( $(this).is(".menu__btn-remove") )
        return;

      let dataProfile = $(this).data("profile");
      let { profileMenuEl } = instance.profileMenu.components;

      instance.profileMenu.changeProfile( dataProfile, true );
      instance.profileMenu.updateProfileMenuStyle( profileMenuEl, dataProfile );
      instance.updateProfile( dataProfile );
    })

    $( volumeMenuEl ).find(".menu__btn").on("click", function (e) {
      if( $(this).is(".menu__btn-remove") )
        return ;

      let dataType = $(this).data("type");
      switch ( dataType ) {
        case "muted":
          instance.volumePlayer.muteVolume();
          instance.updateVolumeMenuStyle( instance.volumePlayer.getMuted(), dataType );
          break;
        case "high-volume":
          instance.volumePlayer.increaseVolume();
          instance.updateVolumeMenuStyle( instance.volumePlayer.getMuted(), dataType );
          break;
        case "low-volume":
          instance.volumePlayer.decreaseVolume();
          instance.updateVolumeMenuStyle( instance.volumePlayer.getMuted(), dataType );
          break;
        default:
          console.log("Merci")
      }
    })
  },
  updateFullscreen : function( ){
    let { globalPlayer, fullscreenEl } = this.components;
    let textInnerEl = $( fullscreenEl ).find(".btn__text-inner");
    if(  globalPlayer.isFullscreen() ){
      setTextContentFromEL( textInnerEl, "Désactiver Plein Ecran" );
    }else{
      setTextContentFromEL( textInnerEl, "Activer Plein Ecran" );
    }
    toggleClassToEl( fullscreenEl , [ $(fullscreenEl).data("class") ]);
  },
  updateVolumeMenuStyle : function( isMuted, type ){
    let { volumeMenuEl } = this.components ;
    removeClassToEl( volumeMenuEl.find(".menu__btn"), "vjs-selected");
    let volumeBtnEl = volumeMenuEl.find(`[data-type=${ type }]`);
    addClassToEl( volumeBtnEl, "vjs-selected");
    let volumeNumberEl = volumeMenuEl.find(".menu__btn-remove .btn__number");

    setTimeout( () => {
      setTextContentFromEL( volumeNumberEl, this.volumePlayer.getVolumePerc() );
    }, 2)

    switch ( type) {
      case "muted":
        if( !isMuted ){
          addClassToEl( volumeBtnEl, $( volumeBtnEl ).data("class") );
        }else{
          removeClassToEl( volumeBtnEl, $( volumeBtnEl ).data("class") );
        }
        break;
    }


  },
  updatePlayPause : function(){
    let { playPauseBtnEl, globalPlayer } = this.components;
    let controlText = null;
    let isPaused = globalPlayer.paused();
    if( isPaused ){
      removeClassToEl( playPauseBtnEl, [ $(playPauseBtnEl).data("class") ]);
      controlText = "Lecture";
    }else{
      addClassToEl( playPauseBtnEl, [ $(playPauseBtnEl).data("class") ] );
      controlText = "Pause";
    }
    setTimeout(  () => {
      setTextContentFromEL(  playPauseBtnEl.find(".btn__text-inner"), controlText );
    }, 1.3 );
  },
  updateProfile : function( selectedProfile ){
    this.setSelectedProfile( selectedProfile );
    this.updateAccessMenuStyle( selectedProfile );
    let { profileEl } = this.components;
    removeClassToEl( profileEl.find(".menu__btn"), "vjs-selected" );
    profileEl.find(".menu__btn")
      .each(
        (index, elemnt ) => $(elemnt).data("profile") === selectedProfile
          ? addClassToEl( elemnt , "vjs-selected") : null );
  },
  updateAccessMenuStyle : function( dataProfile ){
    let { accessMenuEl } = this.components;
    if( dataProfile === "LSF +"  ){
      accessMenuEl.find("#video-speed").hide();
      accessMenuEl.find("#contrast-btn").show();
    }else{
      accessMenuEl.find("#video-speed").show();
      accessMenuEl.find("#contrast-btn").hide();
    }
  }
}

export { accessMenu };
