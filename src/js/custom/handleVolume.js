import {appendChildToParent, getPropertyValue} from "./operationsClassEl.js";

let volumePlayer = {
  components : {},
  instance : null,
  isMuted : false,
  volume : 0,
  toolTipText : null,
  options: {},
  setVolumeBarPosition : function ( isVertical ){
    console.log( this.components.volumePanel.options())
    let options = {
      ...this.options,
      inline : isVertical,
    }
    this.setOptions( options );

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
    appendChildToParent( volumePanel.el() , toolTipEl );
    this.setComponents({videoElement, volumePanel, muteToggleEl, volumeControl, toolTipEl, volumeBar } );
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


    volumeBar.on( "mousedown", function(e){
      volumeBar.on("mouseup", function( e ){
        console.log( instance );
        e.preventDefault();
        instance.setVolume( videoElement.volume );
        volumeBar.off( "mousemove");

      });
      volumeBar.on("mousemove", function(e){
        e.preventDefault();
      })
    });
  }
}

const createToolTipEl = function( tagName, className ){
  return $( document.createElement( tagName) ).prop("className", className) ;
}



export {
  volumePlayer
}
