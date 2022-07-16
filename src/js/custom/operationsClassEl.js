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

function removeEl( El ){
  $(El).remove();
}

function findEl( parentEl, selector ){
  if( typeof selector === 'string' )
    return $(parentEl).find( selector );
  return $(parentEl).find( $(selector) );
}

function getHTMLEl ( El ){
  return $(El).get(0);
}

function getPropertyValue( El, property ) {
  return $(El).prop(property );

}

function setPropertyValue( El, property, value ){
  $(El).prop( property, value );
}

function setAttrEl( El, attributeName, value ){
  $(El).attr( attributeName, value );
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

function getWidthInPerc( containerParentSize, childSize ) {
  return ( childSize * 100 ) / containerParentSize;
}

function setCssProperty( El, property, value ){
  $(El).css( property, value );
}

const getWidthFromElInPercent = ( El, containerParentEl ) => {
  let width = getPropertyValue(El , "offsetWidth");
  let widthParent = getPropertyValue( containerParentEl, "offsetWidth");
  return getWidthInPerc( widthParent, width );
}

const createElement = function( tagName, attributes ){
  let newEl = document.createElement( tagName, attributes );
  if( attributes ){
    newEl.setAttribute("class", `${ Object.values(attributes).join(" ")}`);
  }
  return newEl;
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
  getHTMLEl,
  getPropertyValue,
  setAttrEl,
  setPropertyValue,
  removeEl,
  getWidthInPerc,
  setCssProperty,
  getWidthFromElInPercent,
  createElement
}
