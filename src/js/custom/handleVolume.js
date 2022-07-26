import {appendChildToParent, getPropertyValue, setTextContentFromEL} from "./operationsClassEl.js";

let volumePlayer = {
  components : {},
  instance : null,
  isMuted : false,
  volume : 0,
  toolTipText : null,
  isVertical : false,
  options: {},
  setVolumeBarPosition : function ( isVertical ){
    let options = {
      ...this.options,
      inline : isVertical,
    }
    this.setOptions( options );

  },
  setIsVertical : function( isVertical ){
    this.isVertical = isVertical;
  },
  setToolTipText : function( tooltipText ){
    this.toolTipText = tooltipText;
  },
  setMuted : function( muted ){
    this.isMuted = muted;
  },
  setVolume : function( volume ){
    this.volume = volume;
  },
  setOptions : function( options ){
    this.options = {
      ...this.options,
      ...options
    };
    this.components.volumePanel.options( this.options );
    //this.components.volumeControl.options( this.options );
  },
  setInstance : function( instance ){
    this.instance = instance;
  },
  setComponents : function( components ){
    this.components = {
      ...this.components,
      ...components
    };
  },
  getInstance : function( components ){
    if( this.instance ){
      return this;
    }
    this.loadVolumePlayer( components );
    this.setInstance( this );
    return this;
  },
  loadVolumePlayer : function( { videoElement, volumePanel } ){
    let  muteToggleEl = volumePanel.muteToggle;
    let volumeControl = volumePanel.volumeControl;
    let volumeBar = volumeControl.volumeBar;
    let toolTipEl = createToolTipEl( "div", "vjs-tooltip" );
    let volumeLevel = volumeBar.volumeLevel;
    appendChildToParent( volumePanel.el() , toolTipEl );
    this.setComponents({videoElement, volumePanel, muteToggleEl, volumeControl, toolTipEl, volumeBar, volumeLevel } );
    this.changeVolumeAlign( this.components );
    this.addEventsVolumePlayer(this,  this.components );
  },
  addEventsVolumePlayer : function (instance,  { videoElement, volumePanel, muteToggleEl, volumeControl, toolTipEl, volumeBar  }){
    $( muteToggleEl.el() ).on("pointerover pointermove click", function( e ){
      e.preventDefault();
      setTimeout( function(){
        muteToggleEl.removeAttribute("title");
        instance.setToolTipText( muteToggleEl.controlText_ );
        toolTipEl.text( muteToggleEl.controlText_ );

      }, 2);

      switch( e.type ){
        case "click":
          instance.setMuted( getPropertyValue( videoElement,  "muted" ) );
          break;
      }
    });

    //$(videoElement).on("volumechange", changeVolume );


    $(".volume-align").on("click", function(e){
      instance.changeVolumeAlign( instance.components );
      if( instance.isVertical ){
        setTextContentFromEL( $(this).find(".access-menu-btn-text"), "Volume Align : Vertical" );
      }else{
        setTextContentFromEL( $(this).find(".access-menu-btn-text"), "Volume Align : Horizontal" )
      }
    })


    volumeBar.on( "mousedown", function(e){
      volumeBar.on("mouseup", function( e ){
        e.preventDefault();
        instance.setVolume( videoElement.volume );
        volumeBar.off( "mousemove");

      });
      volumeBar.on("mousemove", function(e){
        e.preventDefault();
      })
    });
  },
  changeVolumeAlign : function ( { volumePanel, volumeControl, volumeBar, volumeLevel }){

    volumePanel.toggleClass( "vjs-volume-panel-horizontal");
    volumePanel.toggleClass( "vjs-volume-panel-vertical");
    volumeControl.toggleClass("vjs-volume-vertical");
    volumeControl.toggleClass("vjs-volume-horizontal");
    let widthLevel = 100 ;
    let heightLevel = 100;

    if( this.isVertical ){
      if( volumeLevel.currentHeight() < 100 )
        widthLevel =  (volumeLevel.currentHeight() * 100 ) / volumeBar.currentHeight();
      this.setIsVertical( false );
      volumeBar.vertical( false );
      volumeBar.removeClass("vjs-slider-vertical");
      volumeLevel.width(`${ widthLevel }%`);
      volumeLevel.height( `3px`);

    }else{
      if( volumeLevel.currentWidth() < 100 )
        heightLevel = (volumeLevel.currentWidth() * 100 ) / volumeBar.currentWidth() ;
      this.setIsVertical( true );
      volumeBar.vertical( true );
      volumeBar.removeClass("vjs-slider-horizontal");
      volumeLevel.height(`${ heightLevel }%` );
      volumeLevel.width( `3px`);
    }
  },

}

const createToolTipEl = function( tagName, className ){
  return $( document.createElement( tagName) ).prop("className", className) ;
}



export {
  volumePlayer
}
