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
const handleFullscreen = () => {
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

export { handleFullscreen };
