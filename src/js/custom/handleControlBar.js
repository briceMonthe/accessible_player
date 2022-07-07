import {addClassToEl, removeClassToEl, toggleClassToEl} from "./operationsClassEl.js";

const handlePopupTooltip = () => {

  /**
   * Add ToolTip to all Button
   * @type {HTMLDivElement}
   */
  let accesPlayer = videojs("#video_access");
  let tooltipElement = document.createElement( "div" );
  tooltipElement.setAttribute("class" , "vjs-tooltip" );
  tooltipElement.setAttribute("aria-hidden", "true");
  accesPlayer.controlBar.playToggle.el_.appendChild(  tooltipElement );
  accesPlayer.controlBar.volumePanel.el_.appendChild(  tooltipElement.cloneNode(true) );
  accesPlayer.controlBar.subsCapsButton.el_.appendChild(  tooltipElement.cloneNode(true) );
  accesPlayer.controlBar.fullscreenToggle.el_.appendChild(  tooltipElement.cloneNode(true) );

  let wordsLang = {
    "Pause" : "Pause",
    "Play" : "Lecture",
    "Replay" : "Relire",
    "Mute" : "Mute",
    "Unmute" : "Unmute",
    "Captions" : "Sous-titres",
    "Fullscreen" : "Activer le Mode Plein Ecran",
    "Non-Fullscreen" : "Quitter le Mode Plein Ecran",
    "Profile": "Choisir son profil d'accessibilité"
  }
  $("[type=button]").on( "pointerenter click", function(e) {
    setTimeout(() => {
      $(this).parent().find(".vjs-tooltip").text(!e.target.title ? wordsLang[e.target.parentElement.title] : wordsLang[e.target.title] );
    }, 20)
  })
}



const handleMenuPopup = () => {
  /**
   * add events for captions menu
   */
  $(".vjs-menu-button-popup").on("pointerenter click pointerleave", function(e) {
    let tooltipEl = $(this).find(".vjs-tooltip");
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
        tooltipEl.is(".vjs-tooltip-hide") ? removeClassToEl( tooltipEl, "vjs-tooltip-hide" ) : null;
        break;
    }

  });
}

export { handleMenuPopup, handlePopupTooltip }
