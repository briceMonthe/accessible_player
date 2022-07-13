const getProfileFromCookie = () => {
  return parseToken( localStorage.getItem("player") )?.profile;
}

const getVideoStateFromCookie = () => {
  return parseToken( localStorage.getItem("player") )?.isPaused;
}


const updateProfileFromCookie = ( key, newProfile ) => {
  let player= parseToken( localStorage.getItem("player") );
  if( !player ){
    player = {}
    player[key] = newProfile;
    localStorage.setItem( "player", stringifyToken( player ) );
    //localStorage.setItem( "player", stringifyToken( Object.defineProperty( player, key, { writable: true, value: newProfile }) ) );
    return;
  }

  //let keyProp = getPropertyName( player, key );
  player[key] = newProfile;
  localStorage.setItem( "player", stringifyToken( {  ...player  } ) );
}

const getPropertyName = ( playerCookie, key ) => Object.getOwnPropertyNames( playerCookie ).find( prop => prop === key ) ;


const parseToken = ( token ) => {
  return JSON.parse( token );
}


const stringifyToken = ( token ) => {
  return JSON.stringify( token );
}

const getProfileObjectToMap = ( profiles, profileProp ) => {
  switch ( profileProp ) {
    case "profile" :
      return profiles.map( ( { profile } ) => profile );
  }
}



export { getProfileFromCookie, updateProfileFromCookie, getProfileObjectToMap, getVideoStateFromCookie }
