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
import {accessMenu} from "./handleAccessMenu.js";


let translate = {
  "Pause": "Pause",
  "Play" : "Lecture",
  "Replay" : "Replay"
};

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
    this.components.playToggleEl.handleClick(); //trigger("click");
    this.changeVideoState( !this.isPaused );
    setTimeout( () => {
      this.setToolTipText( this.components.playToggleEl.controlText_ )
    }, 1.3)
  },
  pauseVideo : function(){
    this.components.playToggleEl.handleClick();
    this.changeVideoState( !this.isPaused );
  },
  changeVideoState : function( state ){
    this.isPaused = state;
    this.setToolTipText();
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
  setToolTipText : function( ){
    let { tooltipEl, bigTooltipEl , bigPlayBtnEl, playToggleEl } = this.components;
    setTimeout( () => {
      this.toolTipText = translate[ playToggleEl.controlText() ];
      playToggleEl.setAttribute("title", "");
      bigPlayBtnEl.setAttribute("title", "");
      setTextContentFromEL( tooltipEl, this.toolTipText );
      setTextContentFromEL( bigTooltipEl, this.toolTipText );
    }, .5);

  },
  loadPlayPauseVideo : function ( { videoEl, accessPlayer } ){
    let playToggleEl  = accessPlayer.controlBar.playToggle;
    let bigPlayBtnEl = accessPlayer.bigPlayButton;
    let previousElToBigPlayContainer = accessPlayer.loadingSpinner;
    let bigPlayContainerEl = findEl( ".vid-acc", ".big-play-container");
    let tooltipEl = createElement("div", { class: "vjs-tooltip"} );
    addTooltipEl( playToggleEl, tooltipEl );
    addBigPlayContainer( bigPlayContainerEl, bigPlayBtnEl, previousElToBigPlayContainer  );
    let bigTooltipEl = createElement("div", { class: "vjs-tooltip"} );
    addTooltipEl( bigPlayBtnEl, bigTooltipEl );
    //this.setToolTipText( playToggleEl.controlText() )

    let components = {
      videoEl,
      bigPlayContainerEl,
      previousElToBigPlayContainer,
      bigPlayBtnEl,
      tooltipEl,
      bigTooltipEl,
      playToggleEl,
      accessPlayer
    };
    this.setComponents( components );
    //this.setToolTipText( playToggleEl.controlText() )
    this.addEventsPlayPauseVideo( this );

    let isPaused = getVideoStateFromCookie();
    if( !isPaused && isPaused === false  ){
      playToggleEl.handleClick();
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
      playToggleEl,
      accessPlayer } = instance.components ;

    bigPlayBtnEl.off("click", bigPlayBtnEl.handleClick );

    $( bigPlayContainerEl ).on( "click pointerleave pointermove", function(e){
      switch ( e.type ) {
        case "click":
          playToggleEl.handleClick(); //.trigger("click") ;
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
          addClassToEl( bigPlayContainerEl, ["big-play-container--play"]);
          //accessMenu.updatePlayPause();
          break;
        case "play":
          instance.changeVideoState( false );
          if( bigPlayContainerEl.is(".big-play-container--ended") )
            removeClassToEl( bigPlayContainerEl, "big-play-container--ended" );
          addClassToEl( bigPlayContainerEl, [ "big-play-container--pause", "container--hide"] );
          removeClassToEl( bigPlayContainerEl,"big-play-container--play" )
          break;
        case "ended":
          /*instance.changeVideoState( true );
          instance.videoEnded( true );*/
          addClassToEl( bigPlayContainerEl, [ "big-play-container--ended"] );
          instance.changeVideoState( accessPlayer.paused() );
          break;
        case "seeked":
          instance.videoEnded(false );
          removeClassToEl( bigPlayContainerEl, [ "big-play-container--ended"] );
          break;

      }
    })

    $(playToggleEl).on( "click" , function(e){
      instance.changeVideoState( accessPlayer.paused() )
    });

    $(playToggleEl).on( "pointerenter" , function(e){
      instance.setToolTipText( );
    });

    $( bigPlayBtnEl ).on( "pointerenter" , function(e){
      instance.setToolTipText( );
    });

    $( bigPlayBtnEl ).on( "click" , function(e){
      instance.changeVideoState( accessPlayer.paused() )
    });


    $(window).on("keydown", function(e){
      e.code === "Enter" || e.code === "Space" ? accessPlayer.handleTechClick_( e ) : null ;
      /*setTimeout( function(){
        $("html").prop("scrollTop", 0)
      }, .5 );*/
    });

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
