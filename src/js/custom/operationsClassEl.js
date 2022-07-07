function addClassToEl( El, className ){
  $(El).addClass( className );
}

function removeClassToEl( El, className ){
  $(El).removeClass( className );
}

function toggleClassToEl( El, className ){
  $(El).toggleClass( className );
}

function setTextContentFromEL( El, textContent ){
  $(El).text( textContent );
}

export {
  addClassToEl ,
  removeClassToEl,
  toggleClassToEl,
  setTextContentFromEL
}
