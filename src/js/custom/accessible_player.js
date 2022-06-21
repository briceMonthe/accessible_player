let repeat_call = setInterval( function(){
  if( !!videojs ){
    start();
    clearInterval( repeat_call );
  }

}, 300)
let accesPlayer ;
const start = () => {
  accesPlayer = videojs("#video_access");
  console.log( accesPlayer )

  //handleSignVideo();
  handleTranscript();
}

const handleSignVideo = () => {
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


  /**
   * Put Events in the original video
   */
  $(videoAccess).on("playing pause seeked timeupdate ended seeking volumechange", async function(e) {
    switch ( e.type ) {
      case "playing":
        accesPlayer.signVideo.get(0).play()
        break;
      case "pause":
        accesPlayer.signVideo.get(0).pause();
        break;
      case "seeked":
        break;
      case "seeking":
        accesPlayer.signVideo.get(0).currentTime = videoAccess.currentTime;
        //console.log( {  ev: "seeking", signvideo : videoAccess.currentTime, video: accesPlayer.signVideo.get(0).currentTime })
        break;

      case "volumechange":
        [ accesPlayer.signVideo.get(0).volume, accesPlayer.signVideo.get(0).muted ]  = [ videoAccess.volume, videoAccess.muted ];
        //console.log( {  ev: "volumechange", signvideo : videoAccess.volume, video: accesPlayer.signVideo.get(0).volume })
        break;
      case "timeupdate":
        /*$(".sv-ct").first().text( videoAccess.currentTime );
        $(".ov-ct").first().text( accesPlayer.signVideo.get(0).currentTime );
        $(".indication").last()
          .after(
            $(".indication").last()
              .clone()
              .empty()
              .append(
                `<span>Sign Video Current Time : <span class="sv-ct" style="color: green;font-size: 22px;font-weight: bold;">${videoAccess.currentTime}</span>  ------</span>`
              )
              .append(
                `---<span>Original Video Current Time : <span class="or-ct" style="color: red;font-size: 22px;font-weight: bold;">${accesPlayer.signVideo.get(0).currentTime}</span></span>`
              )
              .append(
                `---<span>Marge / Ecart : <span class="step-ct" style="color: blue;font-size: 22px;font-weight: bold;">${ Math.abs( accesPlayer.signVideo.get(0).currentTime - videoAccess.currentTime ) }</span></span>`
              )
          )*/
        //console.log( {  ev: "timeupdate", signvideo : videoAccess.currentTime, video: accesPlayer.signVideo.get(0).currentTime })
        break;

    }
  })
}

const handleTranscript = () => {
  let videoAccess = accesPlayer.children_.at( 0 );
  $( videoAccess ).css("width", "50%");

  /**
   * Add Transcript to video player
   */
  accesPlayer.ready(function(){
    // Set up any options.
    let options = {
      showTitle: true,
      showTrackSelector: false,
      autoscroll: true,
      clickArea: 'line',
      followPlayerTrack: true,
      stopScrollWhenInUse: false
    };

    // Initialize the plugin.
    let transcript = this.transcript(options);

    /**
     * Mode the title of Transcript in the transcript body
     */
    setTimeout( () => {
      $(".transcript-body").prepend( $(".transcript-header") );
    }, 300)

    // Then attach the widget to the page.
    let transcriptContainer = document.querySelector('#transcript');
    transcriptContainer.appendChild(transcript.el());
  });

  $( videoAccess ).after( $("#transcript") );
}
