const getProfileFromCookie = () => {
  return parseToken( localStorage.getItem("player") )?.profile;
}

const updateProfileFromCookie = ( newProfile ) => {
  let player= parseToken( localStorage.getItem("player") );
  if( !player ){
    localStorage.setItem( "player", stringifyToken( { profile : newProfile } ) );
    return;
  }
  player.profile = newProfile;
  localStorage.setItem( "player", stringifyToken( {  ...player  } ) );
}

const parseToken = ( token ) => {
  return JSON.parse( token );
}

const stringifyToken = ( token ) => {
  return JSON.stringify( token );
}

const getProfileMap = ( profiles, profileProp ) => {
  switch ( profileProp ) {
    case "profile" :
      return profiles.map( ( { profile } ) => profile );
  }
}

export { getProfileFromCookie, updateProfileFromCookie, getProfileMap }
