import {
  appendChildToParent,
  addChildAfterEl,
  getPreviousEl,
  toggleClassToEl,
  removeClassToEl,
  addClassToEl,
  findEl,
  getHTMLEl
} from "./operationsClassEl.js";
import {
  getVideoStateFromCookie,
  updateProfileFromCookie
} from "./third-party-api.js";

let playPauseVideo = {
  isPaused : true,
  isEnded : false,
  toolTipText: null,
  components : {
    videoAccessEl : null,
    controlBar : {
      playPauseContainerEl : null,
      playPauseTooltipEl : null,
    },
    bigPlayPauseContainerEl : null,
    previousElFromBigPlayContainerEl : null,
  },
  instance : null,
  getInstance : function() {
    if( this.instance ){
      return this.instance;
    }

    handlePlayPauseVideo( this );
    this.instance = this;
    return this.instance;
  },
  playVideo : function(){
    getHTMLEl( this.components.videoAccessEl ).play();
    this.changeVideoState( false );
  },
  pauseVideo : function(){
    getHTMLEl( this.components.videoAccessEl ).pause();
    this.changeVideoState( true );
  },
  changeVideoState : function( state ){
    this.isPaused = state;
    updateProfileFromCookie( "isPaused", state );
  },
  videoEnded : function( isEnded ){
    this.isEnded = isEnded;
  },
  setComponents : function( components ){
    this.components = components;
  },
  setToolTipText : function( text ){
    this.toolTipText = text;
  },
  loadPlayPauseVideo : function ( videoElement, playContainerEl , bigPlayEl, toolTipEl = $(".vjs-tooltip--play") ){
    let playPauseTooltipEl = addTooltipEl( this, playContainerEl, toolTipEl );
    let { previousEl, bigPlayPauseContainerEl } =  addBigPlayBtnContainer(this, bigPlayEl );

    let components = {
      videoAccessEl: videoElement,
      controlBar: {
        playPauseContainerEl: playContainerEl,
        playPauseTooltipEl: playPauseTooltipEl ,
      },
      bigPlayPauseContainerEl: bigPlayPauseContainerEl,
      previousElFromBigPlayContainerEl: previousEl
    };
    this.setComponents( components );
    addEventsPlayPauseVideo( this );

    let isPaused = getVideoStateFromCookie();
    if( !isPaused && isPaused === false  ){
      this.changeVideoState( isPaused );
      this.playVideo();
    }
    this.changeVideoState( true );
  }
}


const addBigPlayBtnContainer = function ( instance, bigBtnEl, containerEl = ".big-play-container") {
  let previousEl = getPreviousEl( bigBtnEl );
  let bigPlayPauseContainerEl = appendChildToParent( $( containerEl ), $(bigBtnEl) );
  addChildAfterEl( previousEl,  bigPlayPauseContainerEl );
  return { previousEl, bigPlayPauseContainerEl }
}

const addTooltipEl = function(instance,  parentEl, tooltipEl ) {
  let playPauseTooltipEl = $( tooltipEl );
  appendChildToParent( parentEl, playPauseTooltipEl );
  return playPauseTooltipEl;
}

const addEventsPlayPauseVideo = function( instance ) {

  let { isPaused, isEnded , toolTipText ,  components : { bigPlayPauseContainerEl , controlBar : { playPauseContainerEl, playPauseTooltipEl } } } = instance ;
  $(".big-play-container, .big-play-container > button ").on( "click pointerleave pointermove", function(e){
    switch ( e.type ) {
      case "click":
        if ( $(this).is(":button") ){
          e.stopPropagation();
          break;
        }
        $( playPauseContainerEl ).click();
        break;
      case "pointerleave":
        if( $(this).is( ".big-play-container--pause" ) )
          addClassToEl( $(this) , "container--hide");
        break;
      case "pointermove":
        if( $(this).is( ".big-play-container--pause" ) )
          removeClassToEl( $(this) , "container--hide");
        break;
    }
  });

  $("#video_access_html5_api").on( "pause play ended timeupdate seeked", function(e){
    switch ( e.type ) {
      case "pause":
        instance.changeVideoState( true );
        removeClassToEl( bigPlayPauseContainerEl, [ "big-play-container--pause", "container--hide"] );
        addClassToEl( bigPlayPauseContainerEl, ["big-play-container--play"])
        break;
      case "play":
        instance.changeVideoState( false );
        if( bigPlayPauseContainerEl.is(".big-play-container--ended") )
          removeClassToEl( bigPlayPauseContainerEl, "big-play-container--ended" );
        addClassToEl( bigPlayPauseContainerEl, [ "big-play-container--pause", "container--hide"] );
        removeClassToEl( bigPlayPauseContainerEl,"big-play-container--play" )
        break;
      case "ended":
        instance.changeVideoState( true );
        instance.videoEnded( true );
        toggleClassToEl( bigPlayPauseContainerEl, [ "big-play-container--ended"] );
        break;
      case "seeked":
        instance.videoEnded(false );
        removeClassToEl( bigPlayPauseContainerEl, [ "big-play-container--ended"] );
        break;

    }
  })

  $( playPauseContainerEl ).on( "pointerenter click" , function(){
    instance.setToolTipText( playPauseTooltipEl.text().trim() );
  })
}

const handlePlayPauseVideo = function(instance) {
  let parentId = "#video_access";
  let [ bigPlayBtnEl, playContainerEl ] = getComponents( videojs(parentId) );
  let videoEl = findEl( parentId, "#video_access_html5_api");
  instance.loadPlayPauseVideo( videoEl, playContainerEl, bigPlayBtnEl, $(".vjs-tooltip--play") )
}

const getComponents = accessPlayer  => [ accessPlayer.bigPlayButton.el_, accessPlayer.controlBar.playToggle.el_ ]

export {
  playPauseVideo
}
