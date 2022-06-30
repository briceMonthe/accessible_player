let repeat_call = setInterval( function(){
  if( !!videojs ){
    start();
    clearInterval( repeat_call );
  }

}, 200)
let accesPlayer ;
const start = () => {
  accesPlayer = videojs("#video_access");
  console.log( accesPlayer)
  handleFullscreenBtn();
  handleAccessBtn();
  handleMenuPopup();
  handlePopupTooltip();

}

const getFullscreenIcon = () => {
  let dAttrs = {
    noFullscreen : "M0.145 16.964q0-0.145 0.112-0.257l3.705-3.705-1.607-1.607q-0.212-0.212-0.212-0.502t0.212-0.502 0.502-0.212h5q0.29 0 0.502 0.212t0.212 0.502v5q0 0.29-0.212 0.502t-0.502 0.212-0.502-0.212l-1.607-1.607-3.705 3.705q-0.112 0.112-0.257 0.112t-0.257-0.112l-1.272-1.272q-0.112-0.112-0.112-0.257zM8.571 9.464v-5q0-0.29 0.212-0.502t0.502-0.212 0.502 0.212l1.607 1.607 3.705-3.705q0.112-0.112 0.257-0.112t0.257 0.112l1.272 1.272q0.112 0.112 0.112 0.257t-0.112 0.257l-3.705 3.705 1.607 1.607q0.212 0.212 0.212 0.502t-0.212 0.502-0.502 0.212h-5q-0.29 0-0.502-0.212t-0.212-0.502z",
    fullscreen : "M0 18.036v-5q0-0.29 0.212-0.502t0.502-0.212 0.502 0.212l1.607 1.607 3.705-3.705q0.112-0.112 0.257-0.112t0.257 0.112l1.272 1.272q0.112 0.112 0.112 0.257t-0.112 0.257l-3.705 3.705 1.607 1.607q0.212 0.212 0.212 0.502t-0.212 0.502-0.502 0.212h-5q-0.29 0-0.502-0.212t-0.212-0.502zM8.717 8.393q0-0.145 0.112-0.257l3.705-3.705-1.607-1.607q-0.212-0.212-0.212-0.502t0.212-0.502 0.502-0.212h5q0.29 0 0.502 0.212t0.212 0.502v5q0 0.29-0.212 0.502t-0.502 0.212-0.502-0.212l-1.607-1.607-3.705 3.705q-0.112 0.112-0.257 0.112t-0.257-0.112l-1.272-1.272q-0.112-0.112-0.112-0.257z"
  }
  return Object.keys( dAttrs ).map( dAttr => `<path d="${ dAttrs[dAttr]}"></path>`) ;
}

const changeFullscreenIconByClickEvent = ( El, noFullscreenEl, fullscrennEl ) => {
  El.on( "click", function(){
    $(this).find("svg").empty().html( `${ document.fullscreen ? fullscrennEl : noFullscreenEl }`)
  })
}

/**
 * change fullscreen icon no format to svg format
 */
const handleFullscreenBtn = () => {
  let [ noFullscreenEl, fullscrennEl ] = getFullscreenIcon();
  let fullScreenBtnElement = $(".vjs-fullscreen-control");
  fullScreenBtnElement.find("*") .eq(0).remove();
  fullScreenBtnElement.prepend(`
    <svg focusable="false" aria-hidden="true" class="vjs-icon-placeholder" viewBox="0 0 20 20">
        ${ !document.fullscreen ? fullscrennEl : noFullscreenEl }
    </svg>`
  );
  changeFullscreenIconByClickEvent( fullScreenBtnElement, noFullscreenEl, fullscrennEl );
}

const handlePopupTooltip = () => {

  /**
   * Add ToolTip to all Button
   * @type {HTMLDivElement}
   */
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

function addClassToEl( El, className ){
  $(El).addClass( className );
}

function removeClassToEl( El, className ){
  $(El).removeClass( className );
}

function toggleClassToEl( El, className ){
  $(El).toggleClass( className );
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

let profils = [
  { profil : "Vision+", classList : ""},
  { profil : "Sans Vision+", classList : ""},
  { profil : "LSF +", classList : ""},
  { profil : "Concentration +", classList : ""},
  { profil : "Audition +", classList : ""},
  { profil : "Standard", classList : "vjs-selected"}
];

const createAccessBtnEl = (profils) => {
  const accessBtnEl = `
        <button type="button" tabindex="0" aria-label="Choisir son profil d'accessibilité" aria-disabled="false" title="Profile" class="vjs-access-control vjs-control vjs-button">
            <svg focusable="false" aria-hidden="true"class="vjs-icon-placeholder" viewBox="0 0 15 20">
                <circle cx="8" cy="10" r="9" stroke="white" stroke-width="1.5" fill="transparent"></circle>
                <path d="m 6.4715267,4.8146068 c 0,-0.6982433 0.5444396,-1.2649335 1.2152669,-1.2649335 0.6708273,0 1.2152668,0.5666902 1.2152668,1.2649335 0,0.6982434 -0.5444395,1.2649336 -1.2152668,1.2649336 -0.6708273,0 -1.2152669,-0.5666902 -1.2152669,-1.2649336 z M 9.3071494,7.7661184 13.479566,5.8931735 13.17899,5.109758 8.0918825,6.9228294 H 7.2817046 L 2.1945976,5.109758 1.8940216,5.8931735 6.0664378,7.7661184 v 3.3731566 l -1.6616749,5.59438 0.7575163,0.299367 2.3511363,-5.472103 h 0.3475663 l 2.3511362,5.472103 0.757517,-0.299367 -1.6616754,-5.59438 z"></path>
            </svg>
            <div class="vjs-tooltip" aria-hidden="true"></div>
         </button>`;


  let accessItemEl = profils.map( el => `
      <li class="vjs-menu-item vjs-access-menu-item ${el.classList}" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false">
                    <span aria-hidden="true" class="vjs-icon-placeholder vjs-access-menu-item-icon"></span>
                    <span class="vjs-menu-item-text">${el.profil}
                            <span class="vjs-control-text"> Profil</span>
                    </span>
                    <span class="vjs-control-text" aria-live="polite"></span>
                </li>
  `);
  const accessMenuEl = `
        <div class="vjs-menu">
            <ul class="vjs-menu-content vjs-access-menu" role="menu">
                ${accessItemEl.join("")}
            </ul>
        </div>`;

  return `<div class="vjs-access-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button">
        ${accessBtnEl}
        ${accessMenuEl}
    </div>`;
}


const handleAccessBtn = () => {
  let divAccessMenu = createAccessBtnEl( profils );
  $(".vjs-volume-panel").after( $(divAccessMenu) );

  $(".vjs-menu").on("click", function(e){
    switch (e.type) {
      case "click":
        addClassToEl( this, "vjs-menu-block");
        break;
    }
  })

  $(".vjs-menu-content").on("pointerleave", function(e){
    switch (e.type) {
      case "pointerleave":
        removeClassToEl( $(this).parent(), "vjs-menu-block");
        break;
    }
  })

  $("li.vjs-menu-item").on("click", function(e){
    switch (e.type) {
      case "click":
        $(this).parent().find("li").removeClass("vjs-selected");
        $(this).addClass("vjs-selected");
        break;
    }
  })
}
