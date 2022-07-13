function addClassToEl( El, ...classNames ){
  classNames.forEach( className => $(El).addClass( className ) );
}

function removeClassToEl( El, ...classNames ){
  classNames.forEach( className => $(El).removeClass( className ) );
}

function toggleClassToEl( El, ...classNames ){
  classNames.forEach( className => $(El).toggleClass( className ) );
}

function setTextContentFromEL( El, textContent, attributesEl ){
  $(El).text( textContent );
  if( attributesEl )
    attributesEl.forEach( attr =>  $(El).attr( attr, textContent ) );

}

function appendChildToParent( parentEl, childEl ){
  return $( parentEl ).append( childEl );
}

function prependChildToParent( parentEl, childEl ){
  return $( parentEl ).prepend( childEl );
}

function addChildAfterEl( currEl, childEl ){
  return $( currEl ).after( childEl );
}

function getPreviousEl( currentEl ){
  return $( currentEl ).prev();
}

function findEl( parentEl, selector ){
  return $(parentEl).find( $(selector) );
}

function getHTMLEl ( El ){
  return $(El).get(0);
}

function addEventsToAllButtonWithTooltipElement(){
  let wordsLang = {
    "Pause" : "Pause",
    "Play" : "Lecture",
    "Replay" : "Relire",
    "Mute" : "Mute",
    "Unmute" : "Unmute",
    "Captions" : "Captions",
    "Subtitles" : "Sous-titres",
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


function setContentEl ( El, content ){
  $(El).css( "content", content );
}

export {
  addClassToEl ,
  removeClassToEl,
  toggleClassToEl,
  setTextContentFromEL,
  appendChildToParent,
  prependChildToParent,
  addChildAfterEl,
  getPreviousEl,
  addEventsToAllButtonWithTooltipElement,
  setContentEl,
  findEl,
  getHTMLEl
}
