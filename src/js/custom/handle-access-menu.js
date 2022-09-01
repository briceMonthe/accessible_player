import {getDataValue, setAttrEl, appendChildToParent, addClassToEl, findEl, removeClassToEl, setTextContentFromEL, toggleClassToEl} from "./operationsClassEl.js";
import {videoSize} from "./handleVideoSize.js";
import {profileMenu} from "./profileMenu.js";
import {captionsVideo} from "./handleCaptions.js";
import {volumePlayer} from "./handleVolume.js";
import {playPauseVideo} from "./handlePlayPauseVideo.js";


const accessMenu = {
  instance : null,
  chooseParams : {
    audioDesc : false,
    lsf : false,
    transcript : false
  },
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
  setChooseParams : function( param, value ){
    this.chooseParams[ param ] = value;
  },
  getChooseParams : function( ){
    return this.chooseParams;
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
    let playPauseBtnEl = findEl( accessMenuEl, ".play-pause-btn");
    let backForwardBtnEls = findEl( accessMenuEl, ".menu-back-forward-row [data-type]");
    let profileEl = findEl( accessMenuEl, "#profiles");
    let profileBtnEls = findEl( accessMenuEl, "[data-profile]");
    let subtitleBtnEls = findEl( accessMenuEl, ".subtitles-menu .menu__btn[data-lang]");
    let volumeMenuEl = findEl( accessMenuEl, ".volume-menu");
    let fullscreenBtnEl = accessMenuEl.find(".menu__btn-fullscreen");
    let speedBtnEl = accessMenuEl.find(".video-speed");
    let lsfBtnEl = findEl( accessMenuEl, ".menu__profile-btn");
    let audioDescBtnEl = findEl( accessMenuEl, ".menu__audioDesc-btn");
    let transcriptBtnEl = findEl( accessMenuEl, ".menu__transcript-btn");
    let contrastBtnEl = findEl( accessMenuEl, ".menu__contrast-btn");
    let sonoreBtnEls = findEl( accessMenuEl, ".sonores-menu [data-type]")
    let sonoreMenuEl = findEl( accessMenuEl, "sonores-menu" );
    this.videoResize = videoSize.getInstance();
    this.playPauseVideo = playPauseVideo.getInstance();
    this.seekBar = globalPlayer.controlBar.progressControl.seekBar;

    this.appendAccessMenuToPlayer( globalPlayer.el(), accessMenuEl );
    this.setComponents({
      globalPlayer, accessMenuEl, profileEl,
      profileBtnEls, subtitleBtnEls, volumeMenuEl,
      playPauseBtnEl, backForwardBtnEls, fullscreenBtnEl,
      speedBtnEl, audioDescBtnEl, contrastBtnEl,
      sonoreBtnEls, sonoreMenuEl, transcriptBtnEl, lsfBtnEl
    });

    this.volumePlayer = await volumePlayer.getInstance();
    this.updateVolumeMenuStyle( this.volumePlayer.getMuted(), "muted" );

    this.captionsVideo = await captionsVideo.getInstance();
    let textTrackList = globalPlayer.controlBar.subsCapsButton.menu.children() ;
    let selectedTrack = this.captionsVideo.selectedTrack;
    this.setSelectedTrack( selectedTrack );
    this.updateCaptionsMenu( textTrackList, selectedTrack );
    this.profileMenu = await profileMenu.getInstance();
    this.updateProfile( this.profileMenu.selectedProfile );

    this.addEventsToAccessMenuEl( this );
  },
  updateCaptionsMenu : function( textTrackList, selectedTrack ){
    let { subtitleBtnEls } = this.components;
    let translation = {
      "français" : "fr",
      "anglais" : "en",
      "espagnol" : "es",
      "jamaïque" : "pl",
      "malentendant" : "none",
    };
    let langs = [];
    let selectedLang = selectedTrack.track.language;
    textTrackList.forEach( trackItem => {
      //let options = track.options();
      let lang = trackItem.track.language;
      if( lang ){
        langs.push( lang );
      }
    });
    subtitleBtnEls.each( (index, el) => langs.includes( $(el).data("lang") ) || !$(el).data("lang") ? $(el).show() : $(el).hide() );
    if( selectedLang )
      this.updateCaptionsMenuStyle( selectedLang );
  },
   updateCaptionsMenuStyle : function( selectedLang ){
    let { subtitleBtnEls } = this.components;
    subtitleBtnEls
      .each(
        (index, elemnt ) => {
          if( selectedLang && $(elemnt).data("lang") === selectedLang ){
            addClassToEl( elemnt , "vjs-selected")
            setTextContentFromEL( $(elemnt).find(".toggle-text"), "Désactiver");
          }else{
            removeClassToEl( elemnt , "vjs-selected");
            setTextContentFromEL( $(elemnt).find(".toggle-text"), "Activer");
          }
        } );
  },
  appendAccessMenuToPlayer : function( globalPlayer, accessMenu ){
    appendChildToParent( globalPlayer, accessMenu );
  },
  addEventsToAccessMenuEl : function( instance ){
    let { globalPlayer, accessMenuEl,lsfBtnEl, profileBtnEls, subtitleBtnEls, volumeMenuEl, playPauseBtnEl, backForwardBtnEls,  fullscreenBtnEl, speedBtnEl, audioDescBtnEl, contrastBtnEl, sonoreBtnEls, transcriptBtnEl } = instance.components;

    let translation = {
      "français" : "fr",
      "anglais" : "en",
      "espagnol" : "es",
      "jamaïque" : "ja",
      "malentendant" : "none",
    };

    $( playPauseBtnEl ).on( "click", function(e){
      instance.updatePlayPause();
    });

    ["play", "pause", "ended", "seeking", "seeked"].forEach( event => globalPlayer.on( event , function(e){ instance.updatePlayBtnStyle(); }))

    backForwardBtnEls.on( "click", function (e) {
      let typeBtn = getDataValue( $(this), "type");
      instance.backForwardPlayer( typeBtn );
    });

    document.onfullscreenchange = function(){
      setTimeout( function(){
        instance.updateFullscreen( globalPlayer.isFullscreen() ? "fullscreen" : "nofullscreen" );
      }, 1.3)

    }

    fullscreenBtnEl.on("click", function(e){
      let fullscreen = globalPlayer.controlBar.fullscreenToggle;
      fullscreen.handleClick();
      //instance.updateFullscreen();
    });

    $( audioDescBtnEl ).on( "click", function(e){
      let chooseAudioParam = null;

      $(this).is(".disabled") ? chooseAudioParam = false : chooseAudioParam = true;
      instance.setChooseParams( "audioDesc", chooseAudioParam );

      instance.updateAudioDescription( $(this).data("mode") );
    });


    speedBtnEl.on( "click", function(e){
      instance.updateSpeed( $(this).data("speedMode") )
    })

    $(".menu__btn").on("click", function(){
      $(".access-menu").addClass( $(this).data("class") );
    })

    $(".menu__btn-remove").on("click", function(){
      $(".access-menu").removeClass( $(this).data("class") );
      //$(".menu").removeClass( $(this).data("class") );
    });

    $( sonoreBtnEls ).on( "click", function(e){
      instance.updateSonore( $(this), $( this ).data("type"), +$(this).data("increment") );
    });

    $(".access-menu .params-menu").find(".menu__btn").on("click", function(e){
      let style = $(this).attr("style");
      $(this).parent().find(".menu__btn").first().attr("style", style );
    })

    subtitleBtnEls.on( "click", function(e){
      let lang = null;
      if( !$(this).is(".vjs-selected") ){
        lang = $(this).data("lang");
      }
      instance.changeSubsCaptions( lang );
    })

    $( contrastBtnEl ).on("click", function(e){
      instance.updateContrast( $(this).data("contrast") );
      instance.videoResize.contrastVideo();
    });

    $( profileBtnEls ).on( "click", function (e) {

      let dataProfile = $(this).data("profile");
      if( $(this).is(".disabled") ){
        instance.handleProfile(e, instance.profileMenu.previousProfile || "Standard" );
        return;
      }

      instance.handleProfile(e, dataProfile );
    });

    $( transcriptBtnEl ).on( "click", function(e){
      let chooseTranscriptParam = null;
      $(this).is(".disabled") ? chooseTranscriptParam = false : chooseTranscriptParam = true;
      //instance.setChooseParams( "transcript", chooseTranscriptParam);

      instance.updateTranscriptStyle( $(this).data("mode") );
      instance.profileMenu.changeProfile( $(this).data("mode") === "disabled" ? "Concentration +" : ( instance.profileMenu.previousProfile || "Standard" ) );
    });

    $( lsfBtnEl ).on("click", function( e ){

      let chooseLSFParam = null;
      $(this).is(".disabled") ? chooseLSFParam = false : chooseLSFParam = true;
      //instance.setChooseParams( "lsf", chooseLSFParam);

      instance.updateLSFStyle( $(this).data("mode") );
      instance.profileMenu.changeProfile( $(this).data("mode") === "disabled" ? "LSF +" : ( instance.profileMenu.previousProfile || "Standard" ) );
    });

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
  selectTrackItem : function( lang ){
    let { globalPlayer } = this.components;
    let subsCapsButton = globalPlayer.controlBar.subsCapsButton.menu.children();

    if( !lang ){
      subsCapsButton.at(1).trigger("click");
      return ;
    }
    globalPlayer.controlBar.subsCapsButton.menu.children().slice(2).forEach(
      ( caption ) => caption.track.language === lang  ? caption.trigger("click") : null
    );
  },
  changeSubsCaptions : function( lang ){
    this.selectTrackItem( lang );
    this.updateCaptionsMenuStyle( lang );
  },
  updateSpeed : function( speedMode ){
    let speedModes = {
      slow: {
        speed : 0.5,
        textSpeed : "Vitesse Ralentie",
        mode : "slow"
      },
      normal: {
        speed : 1.0,
        textSpeed : "Vitesse Normale",
        mode : "normal",
      },
      rapid: {
        speed : 1.5,
        textSpeed : "Vitesse Rapide",
        mode : "rapid"
      },
    }
    let { speedBtnEl, globalPlayer } = this.components;
    let { signVideoEl } = this.videoResize.components;
    removeClassToEl( speedBtnEl , speedMode );
    speedMode = Object.values(speedModes)[ ( Object.keys( speedModes ).indexOf( speedMode ) + 1 ) % 3 ];
    $(speedBtnEl).data("speedMode", speedMode.mode );
    addClassToEl( $(speedBtnEl), speedMode.mode );
    globalPlayer.playbackRate( speedMode.speed  );
    signVideoEl.prop("playbackRate", speedMode.speed );
    setTextContentFromEL( $(speedBtnEl).find(".btn__text-inner"), speedMode.textSpeed );
  },
  updateSonore : function( btn, btnType, increment ){
    let currSonoreEl = btn.parent().find(".btn__text-inner");
    if(  btnType === "default" ){
      setTextContentFromEL( currSonoreEl, '100' );
      return;
    }

    let currSonore = +currSonoreEl.text();
    currSonore += increment;
    if( currSonore < 0 || currSonore > 200 ){
      return;
    }
    setTextContentFromEL( currSonoreEl, currSonore );

  },
  backForwardPlayer : function( typeBtn ){
    switch ( typeBtn ) {
      case "back":
        this.seekBar.stepBack();
        break;
      case "forward":
        this. seekBar.stepForward();
        break;
      default :
        console.log("Exception");
    }
  },
  updateContrast : function( contrastMode ) {
    let contrastModes = {
      normal : {
        mode : "normal",
        textContrast : "Vidéo Normale"
      },
      contrast : {
        mode : "contrast",
        textContrast : "Vidéo Contrastée"
      }
    };
    let { contrastBtnEl } = this.components;
    removeClassToEl( contrastBtnEl, contrastMode );
    contrastMode = Object.values( contrastModes )[ ( Object.keys( contrastModes ).indexOf( contrastMode ) + 1 ) % 2 ];
    addClassToEl( contrastBtnEl, contrastMode.mode );
    $( contrastBtnEl ).data( "contrast", contrastMode.mode );
    setTextContentFromEL( contrastBtnEl.find(".btn__text-inner"), contrastMode.textContrast );
  },
  updateAudioDescription : function( audioDescMode ){
    let { audioDescBtnEl } = this.components;
    let audioDescModes = {
      enabled : {
        mode : "enabled",
        textDesc : "Activer L'Audiodescraiption",
      },
      disbaled : {
        mode : "disabled",
        textDesc : "Ôter L'Audiodescription",
        classStyle : "vjs-selected"
      }
    }

    removeClassToEl( audioDescBtnEl , [audioDescMode, "vjs-selected"] );
    audioDescMode = Object.values( audioDescModes )[ ( Object.keys( audioDescModes ).indexOf( audioDescMode ) + 1 ) % 2 ];
    addClassToEl( audioDescBtnEl, [ audioDescMode.mode, audioDescMode.classStyle ] );
    $( audioDescBtnEl ).data( "mode",  audioDescMode.mode );
    setTextContentFromEL( $( audioDescBtnEl ).find(".btn__text-inner"), audioDescMode.textDesc );
  },
  updateAudioDesc : function( audiDescMode ){
    if( this.getChooseParams()["audioDesc"] ){
      return;
    }
    this.updateAudioDescription( audiDescMode );
  },
  updateTranscriptStyle: function( transcriptMode ){
    let { transcriptBtnEl } = this.components;
    let transcriptModes = {
      enabled : {
        mode : "enabled",
        textDesc : "Activer La Transcription",
      },
      disbaled : {
        mode : "disabled",
        textDesc : "Ôter La transcription",
        classStyle : "vjs-selected"
      }
    };
    removeClassToEl( transcriptBtnEl , [ transcriptMode, "vjs-selected"] );
    transcriptMode = Object.values( transcriptModes )[ ( Object.keys( transcriptModes ).indexOf( transcriptMode ) + 1 ) % 2 ];
    addClassToEl( transcriptBtnEl, [ transcriptMode.mode, transcriptMode.classStyle ] );
    $(transcriptBtnEl ).data( "mode",  transcriptMode.mode );
    setTextContentFromEL( $( transcriptBtnEl ).find(".btn__text-inner"), transcriptMode.textDesc );
  },
  updateTranscript : function( transcriptMode ){
    if( this.getChooseParams()["transcript"] ){
      return;
    }
    this.updateTranscriptStyle( transcriptMode );
  },
  updateLSFStyle: function( lsfMode ){
    let { lsfBtnEl } = this.components;
    let lsfModes = {
      enabled : {
        mode : "enabled",
        textDesc : "Activer La LSF",
      },
      disbaled : {
        mode : "disabled",
        textDesc : "Ôter La LSF",
        classStyle : "vjs-selected"
      }
    };
    removeClassToEl( lsfBtnEl , [ lsfMode, "vjs-selected"] );
    lsfMode = Object.values( lsfModes )[ ( Object.keys( lsfModes ).indexOf( lsfMode ) + 1 ) % 2 ];
    addClassToEl( lsfBtnEl, [ lsfMode.mode, lsfMode.classStyle ] );
    $( lsfBtnEl ).data( "mode",  lsfMode.mode );
    setTextContentFromEL( $( lsfBtnEl ).find(".btn__text-inner"), lsfMode.textDesc );
  },
  updateLSF : function( lsfMode ){
    if( this.getChooseParams()["lsf"] ){
      return;
    }
    this.updateLSFStyle( lsfMode );
  },
  handleProfile : function( event, dataProfile ){
    let { profileMenuEl } = this.profileMenu.components;
    this.profileMenu.changeProfile( dataProfile, true );
    //this.profileMenu.updateProfileMenuStyle( profileMenuEl, dataProfile );
    this.updateProfile( dataProfile );
  },
  updateFullscreen : function( fullscreenMode ){
    let fullscreenModes = {
      fullscreen : {
        mode : "fullscreen",
        textMode : "Activer le mode plein écran"
      },
      nofullscreen : {
        mode : "nofullscreen",
        textMode : "Quitter le mode plein écran"
      }
    }
    let { globalPlayer, fullscreenBtnEl } = this.components;

    removeClassToEl( fullscreenBtnEl , fullscreenMode  );
    fullscreenMode = Object.values( fullscreenModes )[ ( Object.keys( fullscreenModes ).indexOf( fullscreenMode ) + 1 ) % 2 ];
    addClassToEl( fullscreenBtnEl, [ fullscreenMode.mode ] );
    $( fullscreenBtnEl ).data( "mode",  fullscreenMode.mode );
    setTextContentFromEL( $( fullscreenBtnEl ).find(".btn__text-inner"), fullscreenMode.textMode );

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
  isPaused : function( globalPlayer, state ){
    return state === 'pause' ? globalPlayer.paused() : globalPlayer.ended() ;
  },
  updatePlayPause : function( ){
    let { globalPlayer } = this.components;
    this.isPaused( globalPlayer, 'pause' ) ? globalPlayer.play() : globalPlayer.pause();
    this.updatePlayBtnStyle();
  },
  updatePlayBtnStyle : function(){
    let { playPauseBtnEl, globalPlayer } = this.components;
    let controlText = null;
    let isPaused = this.isPaused( globalPlayer, 'pause' );
    let isEnded = this.isPaused( globalPlayer, 'ended' );
    let classPauseEnd = "classPause";
    if( isPaused ){
      classPauseEnd = "classEnd";
      if( isEnded ){
        addClassToEl( playPauseBtnEl, [ $(playPauseBtnEl).data( classPauseEnd ) ] );
      }else{
        removeClassToEl( playPauseBtnEl, [ $(playPauseBtnEl).data( classPauseEnd ) ] );
      }
      classPauseEnd = "classPause";
      removeClassToEl( playPauseBtnEl, [ $(playPauseBtnEl).data( classPauseEnd ) ]);
      controlText = "Lecture";
    }else{
      classPauseEnd = "classEnd";
      removeClassToEl( playPauseBtnEl, [ $(playPauseBtnEl).data( classPauseEnd ) ]);
      classPauseEnd = "classPause";
      addClassToEl( playPauseBtnEl, [ $(playPauseBtnEl).data( classPauseEnd ) ] );
      controlText = "Pause";
    }
    setTextContentFromEL(  playPauseBtnEl.find(".btn__text-inner"), controlText );
  },
  updateProfile : function( selectedProfile ){
    this.setSelectedProfile( selectedProfile );
    this.updateAccessMenuStyle( selectedProfile );
    let { profileBtnEls } = this.components;
    let profileData = null;
    removeClassToEl( profileBtnEls, "vjs-selected" );
    profileBtnEls
      .each(
        (index, elemnt ) => {
          profileData = $(elemnt).data("profile");
          if(  profileData === selectedProfile ){
            addClassToEl( elemnt , "vjs-selected");
          }

          let mode = $( elemnt ).data("mode");
          let textInner = null;
          let textInnerEl = $(elemnt).find(".btn__text-inner");
          if( mode && profileData === "LSF +"  ){
            if( selectedProfile === "LSF +"){
              textInner = "Ôter La LSF"
              addClassToEl( elemnt, mode );
            }else{
              textInner = "Activer La LSF";
              removeClassToEl( elemnt, mode );
            }
            setTextContentFromEL( textInnerEl, textInner);
          }

          if( mode && profileData === "Concentration +"  ){
            if( selectedProfile === "Concentration +"){
              textInner = "Ôter La Transcription"
              addClassToEl( elemnt, mode );
            }else{
              textInner = "Activer La Transcription";
              removeClassToEl( elemnt, mode );
            }
            setTextContentFromEL( textInnerEl, textInner);
          }

          if( mode && profileData === "Sans Vision +"  ){
            this.updateAudioDesc( selectedProfile );
          }
        });
  },
  updateAccessMenuStyle : function( dataProfile ){
    let { accessMenuEl } = this.components;
    if( dataProfile === "LSF +"  ){
      accessMenuEl.find("#video-speed").hide();
      accessMenuEl.find(".menu__contrast-btn").first().show();
    }else{
      accessMenuEl.find("#video-speed").show();
      accessMenuEl.find(".menu__contrast-btn").first().hide();
    }
  },
  displayAccessMenu : function( selectedProfile ){
    let { accessMenuEl } = this.components;
    selectedProfile === "Standard" ? addClassToEl( accessMenuEl, "menu--hide") : removeClassToEl( accessMenuEl, "menu--hide" );
  }
}

export { accessMenu };



