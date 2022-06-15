let repeat_call = setInterval( function(){
  if( !!videojs ){
    start();
    clearInterval( repeat_call );
  }
}, 300)
let accesPlayer ;
const start = () => {
  accesPlayer = videojs("#video_access");
  //console.log( accesPlayer )

  /**
   * Add Sign Video After Original Video
   */
  let videoAccess = accesPlayer.children_.at( 0 );
  $( videoAccess ).css("width", "50%");
  accesPlayer.signVideo = $(videoAccess).clone(true, true);
  let signId = videoAccess.id;
  accesPlayer.signVideo.attr( "id", `sign-${ signId }`).css({ left: "initial", right : 0, backgroundColor: "#3c3c3c" } );
  $( videoAccess ).after( accesPlayer.signVideo );

  /**
   * Change the src of the Access Video
   */
  const srcElement = $(videoAccess).find("source");
  srcElement.attr("src", srcElement.data("signSrc") );
  $(videoAccess).attr("src", srcElement.data("signSrc") );

  $(videoAccess).on("playing pause seeked timeupdate ended seeking", async function(e) {
    switch ( e.type ) {
      case "playing":
        accesPlayer.signVideo.get(0).play()
        break;
      case "pause":
        accesPlayer.signVideo.get(0).pause();
        break;
      case "seeked":
        break;
      case "timeupdate":
        console.log( {  ev: "timeupdate", signvideo : videoAccess.currentTime, video: accesPlayer.signVideo.get(0).currentTime })
        break;
      case "seeking":
        accesPlayer.signVideo.get(0).currentTime = videoAccess.currentTime;
        console.log( {  ev: "seeking", signvideo : videoAccess.currentTime, video: accesPlayer.signVideo.get(0).currentTime })
        break;

    }
  })
}
