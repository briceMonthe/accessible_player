import {
  addClassToEl,
  appendChildToParent,
  createElement,
  getPropertyValue,
  removeClassToEl,
  toggleClassToEl
} from "./operationsClassEl.js";
import {findEl} from "./operationsClassEl.js";
import {getLatestTrackFromCookie, updateProfileFromCookie} from "./third-party-api.js";
import {videoSize} from "./handleVideoSize.js";


const captionsVideo = {
  tooltipText : null,
  instance: null,
  selectedTrack: null,
  previousTrack: null,
  videoSizeObject : null,
  components : {
    tooltipEl: null,
    captionBtnEl: null,
    captionMenuEl: null,
    captionContainerEl : null,
    textTrackEl : null,
    textTrackContainerEl : null,
    trackListEl : null,
  },
  setSelectedTrack : function( indexTrack, newTrack ){
    if( indexTrack === 0 ){
      return;
    }
    this.selectedTrack = newTrack;
    updateProfileFromCookie( "indexTrack", indexTrack )
  },
  setTooltipText : function( text ){
    this.tooltipText = text;
  },
  setInstance: function ( instance ) {
    this.instance = instance;
  },
  getInstance : function( components ){
    if( this.instance )
      return this.instance;

    this.loadCaptionsVideo( components ) ;
    this.setInstance( this );
    return this.instance;
  },
  setComponents: function( components ){
    this.components = {
      ...this.components,
      ...components
    }
  },
  loadCaptionsVideo : function( { accessPlayer } ){
    let captionContainerEl = accessPlayer.controlBar.subsCapsButton;
    let [ captionBtnEl, captionMenuEl ] = accessPlayer.controlBar.subsCapsButton.children();
    let textTrackContainerEl = accessPlayer.textTrackDisplay;
    let textTrackEl = $( textTrackContainerEl.el() ).find("div").first();
    let textTrackList = captionContainerEl.items;
    let tooltipEl = createElement("div", { class: "vjs-tooltip" });
    appendChildToParent( captionBtnEl.el(), tooltipEl);
    this.setComponents( { captionContainerEl, captionBtnEl, captionMenuEl, tooltipEl, textTrackList  } );
    this.videoSizeObject = videoSize.getInstance();
    this.addEventsCaptionsVideo( this );

    let indexTrack = getLatestTrackFromCookie();
    if( indexTrack ){
      let latestTrack = textTrackList.at( indexTrack );
      latestTrack.trigger( "click" );
      this.setSelectedTrack( indexTrack, latestTrack );
      //latestTrack.selected()
    }
  },
  addEventsCaptionsVideo : function( instance ){
    let { captionContainerEl, captionBtnEl, captionMenuEl, tooltipEl,textTrackList } = instance.components;
    let { container } = instance.videoSizeObject.components;

    $( captionContainerEl.el() ).on("pointerenter click pointerleave", function(e) {
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

    $( captionBtnEl.el() ).on("pointerover pointermove click", function( e ){
      e.preventDefault();
      setTimeout( function(){
        captionBtnEl.removeAttribute("title");
        instance.setTooltipText( captionBtnEl.controlText_ );
        $(tooltipEl).text( captionBtnEl.controlText_ );

      }, 2);
    });

    /*$(".vjs-subs-caps-button li.vjs-menu-item").on("click", function(e){
      console.log("°°°°°°°°°°°°°°")
    });*/

    textTrackList.forEach( (item , index) => {
      $( item.on( "click" , function(e){
        index === 1 ? container.removeClass("captions--active") : container.addClass("captions--active")
        instance.setSelectedTrack( index, item );
      }))
    })


  }

}


export{
  captionsVideo
}
