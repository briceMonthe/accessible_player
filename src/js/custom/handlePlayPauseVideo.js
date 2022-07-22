import {
  appendChildToParent,
  addChildAfterEl,
  toggleClassToEl,
  removeClassToEl,
  addClassToEl,
  findEl,
  setTextContentFromEL,
  createElement,
  setPropertyValue
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
    videoEl : null,
    bigPlayContainerEl : null,
    previousElToBigPlayContainer : null,
    bigPlayBtnEl : null,
    tooltipEl : null
  },
  instance : null,
  setInstance : function( instance ){
    this.instance = instance;
  },
  getInstance : function( components ) {
    if( this.instance ){
      return this.instance;
    }
    this.loadPlayPauseVideo( components  );
    this.setInstance( this );
    return this;
  },
  playVideo : function(){
    //this.components.videoEl.play();
    this.components.playToggleEl.trigger("click");
    this.changeVideoState( false );
  },
  pauseVideo : function(){
    this.components.videoEl.pause();
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
    this.components = {
      ...this.components,
      ...components
    };
  },
  setToolTipText : function( text ){
    this.toolTipText = text;
  },
  loadPlayPauseVideo : function ( { videoEl, accessPlayer } ){
    let playToggleEl  = accessPlayer.controlBar.playToggle;
    let bigPlayBtnEl = accessPlayer.bigPlayButton;
    let previousElToBigPlayContainer = accessPlayer.loadingSpinner;
    let bigPlayContainerEl = findEl( ".vid-acc", ".big-play-container");
    let tooltipEl = createElement("div", { class: "vjs-tooltip"} );
    addTooltipEl( playToggleEl, tooltipEl );
    addBigPlayContainer( bigPlayContainerEl, bigPlayBtnEl, previousElToBigPlayContainer  );

    let components = {
      videoEl,
      bigPlayContainerEl,
      previousElToBigPlayContainer,
      bigPlayBtnEl,
      tooltipEl,
      playToggleEl,
    };
    this.setComponents( components );
    this.setToolTipText( playToggleEl.controlText_ )
    this.addEventsPlayPauseVideo( this );

    let isPaused = getVideoStateFromCookie();
    if( !isPaused && isPaused === false  ){
      this.playVideo();
    }else{
      this.changeVideoState( true );
    }
  },
  addEventsPlayPauseVideo : function( instance ) {

    let {
      videoEl,
      bigPlayContainerEl,
      previousElToBigPlayContainer,
      bigPlayBtnEl,
      tooltipEl,
      playToggleEl, } = instance.components ;
    $( bigPlayContainerEl ).on( "click pointerleave pointermove", function(e){
      switch ( e.type ) {
        case "click":
          if ( $(this).is(":button") ){
            e.stopPropagation();
            break;
          }
          playToggleEl.trigger("click") ;
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

    $( videoEl ).on( "pause play ended timeupdate seeked", function(e){
      switch ( e.type ) {
        case "pause":
          instance.changeVideoState( true );
          removeClassToEl( bigPlayContainerEl, [ "big-play-container--pause", "container--hide"] );
          addClassToEl( bigPlayContainerEl, ["big-play-container--play"])
          break;
        case "play":
          instance.changeVideoState( false );
          if( bigPlayContainerEl.is(".big-play-container--ended") )
            removeClassToEl( bigPlayContainerEl, "big-play-container--ended" );
          addClassToEl( bigPlayContainerEl, [ "big-play-container--pause", "container--hide"] );
          removeClassToEl( bigPlayContainerEl,"big-play-container--play" )
          break;
        case "ended":
          instance.changeVideoState( true );
          instance.videoEnded( true );
          toggleClassToEl( bigPlayContainerEl, [ "big-play-container--ended"] );
          break;
        case "seeked":
          instance.videoEnded(false );
          removeClassToEl( bigPlayContainerEl, [ "big-play-container--ended"] );
          break;

      }
    })

    $(playToggleEl.el()).on( "pointerenter click" , function(e){
      setTimeout(function(){
        playToggleEl.setAttribute("title", "");
        instance.setToolTipText( playToggleEl.controlText_ );
        setTextContentFromEL( tooltipEl, instance.toolTipText );
      }, 2)
    })
  }
}


const addBigPlayContainer = function ( bigPlayContainerEl, bigPlayBtnEl, previousElToBigPlayContainer ) {
  appendChildToParent( bigPlayContainerEl, bigPlayBtnEl.el() );
  addChildAfterEl( previousElToBigPlayContainer.el() ,  bigPlayContainerEl );
}

const addTooltipEl = function( parentEl, tooltipEl ) {
  appendChildToParent( parentEl.el(), tooltipEl );
}


export {
  playPauseVideo
}
