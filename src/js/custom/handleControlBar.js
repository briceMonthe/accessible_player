import {addClassToEl, removeClassToEl, toggleClassToEl, addEventsToAllButtonWithTooltipElement} from "./operationsClassEl.js";

const handlePopupTooltip = () => {

  /**
   * Add ToolTip to all Button
   * @type {HTMLDivElement}
   */
  let accesPlayer = videojs("#video_access");
  let tooltipElement = document.createElement( "div" );
  tooltipElement.setAttribute("class" , "vjs-tooltip" );
  tooltipElement.setAttribute("aria-hidden", "true");
  //accesPlayer.controlBar.subsCapsButton.el_.appendChild(  tooltipElement.cloneNode(true) );
  accesPlayer.controlBar.fullscreenToggle.el_.appendChild(  tooltipElement.cloneNode(true) );

  //addEventsToAllButtonWithTooltipElement();
}



const handleMenuPopup = () => {
  /**
   * add events for captions menu
   */
  //, .vjs-menu-button-popup
  $(".vjs-subs-caps-button").on("pointerenter click pointerleave", function(e) {
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
