import {appendChildToParent, prependChildToParent, createElement, setTextContentFromEL} from "./operationsClassEl.js";


const fullscreenPlayer = {
  instance: null,
  tooltipText: null,
  components: {
    fullscreenBtnEl : null,
    globalPlayerEl : null,
    fullscreenEl : null,
    nofullscreenEl : null
  },
  translate : {
    "Fullscreen" : "Activer le Mode Plein Ecran",
    "Non-Fullscreen" : "Quitter Le Mode Plein Ecran"
  },
  isFullscreen : false,
  setFullscreenMode : function( isFullscreen ){
    this.isFullscreen = isFullscreen;
  },
  setTooltipText: function( text ){
    this.tooltipText = text;
  },
  setComponents : function( components ){
    this.components = components;
  },
  setInstance: function( instance ){
    this.instance = instance;
  },
  getInstance : function( accessPlayer ){
    if( this.instance ){
      return this.instance;
    }

    this.loadFullscreenPlayer( accessPlayer );
    this.setInstance( this );
    return this.instance;
  },
  loadFullscreenPlayer : function( accessPlayer ){
    let fullscreenBtnEl = accessPlayer.controlBar.fullscreenToggle;
    let globalPlayerEl = accessPlayer.el();
    let fullscreenEl = $("#fullscreen-icon")
    let nofullscreenEl = $("#nofullscreen-icon");
    let tooltipEl = createElement("div", { class: "vjs-tooltip" });
    prependChildToParent( fullscreenBtnEl.el() , tooltipEl );

    prependChildToParent( fullscreenBtnEl.el(), fullscreenEl );
    prependChildToParent( fullscreenBtnEl.el(), nofullscreenEl );
    this.setComponents( { fullscreenBtnEl, globalPlayerEl, fullscreenEl , nofullscreenEl, tooltipEl})
    this.changeFullscreenIconByClickEvent( this );
  },
  changeFullscreenIconByClickEvent : function ( instance )  {
    let { fullscreenBtnEl, globalPlayerEl,tooltipEl, fullscreenEl , nofullscreenEl } = instance.components;

    $( fullscreenBtnEl.el() ).on( "pointerenter click" , function(e){
      setTimeout(function(){
        $( fullscreenBtnEl.el() ).attr("title", "");
        instance.setTooltipText( fullscreenBtnEl.controlText_ );
        setTextContentFromEL( tooltipEl, instance.translate[  instance.tooltipText ]  );
      }, 2)
    })

    $(globalPlayerEl).on( "fullscreenchange", function( e ){
      let accessMenuHeight = $(globalPlayerEl).prop("scrollHeight") - $(globalPlayerEl).prop("offsetHeight");
      instance.setFullscreenMode( !instance.isFullscreen );
      /*if( instance.isFullscreen )
        $(".access-menu").css("height", accessMenuHeight );
      else
        $(".access-menu").css("height", "fit-content");*/
    })

  }
}



export { fullscreenPlayer };
