import {appendChildToParent} from "./operationsClassEl.js";


const transcriptVideo ={
  instance : null,
  components : {
    transcriptContainerEl : null,
    wrapperTranscriptEl : null,
    transcriptEl : null,
  },
  setComponents : function( components ){
    this.components = {
      ...this.components,
      ...components
    }
  },
  setInstance : function( instance ){
    this.instance = instance;
  },
  getInstance : function( player ){
    if( this.instance )
      return this.return;

    this.loadTranscriptVideo( player );
    this.setInstance( this );
    return this;

  },
  loadTranscriptVideo : function( player ){
    let components = {};
    let wrapperTranscript = $("#transcript");
    let transcriptContainerEl = wrapperTranscript.find(".wrapper__transcript").first();
    let transcriptEl = null;
    components = {
      wrapperTranscript, transcriptEl, transcriptContainerEl
    }
    this.loadTextTrackForTranscript( components, player );

  },
  addEventsTranscript : function( ){

    let settingBtnEl = $(".wrapper__icon-setting");
    let modalEl = $("#modal-align");

    settingBtnEl.on( "click", function(e){
      console.log("mmmmmmmmmmmmmmm")
      showModal( this, modalEl);
    });

    $(".alignment__btn").on( "click" , function(e){
      let alignDisplay = $(this).data("boxAlign");
      if( alignDisplay === "horizontal" ) {
        $("#concentration-plus").addClass("horizontal");
        $("html").attr("data-align", "horizontal");
      }else{
        $("html").removeAttr("data-align");
        $("#concentration-plus").removeClass(" horizontal ");
      }
      showModal( this, modalEl );
    })

    $(".modal__content").on("click", function(e){
      e.stopPropagation();
    })

    modalEl.on("click", function(e){
      showModal( this, modalEl );
    })



  },
  loadTextTrackForTranscript : function( components , player) {
    let thisObj = this;
    player.ready( async function( ){
      let options = {
        showTitle: true,
        autoscroll: true,
        clickArea: 'line',
        followPlayerTrack: true,
        stopScrollWhenInUse: false,
      };

      let transcript = this.transcript(options);
      components.transcriptEl = await transcript.el();
      thisObj.addTextTrackInTranscriptWrapper( components );
      thisObj.setComponents( components );
      thisObj.addEventsTranscript();
    });
  },
  addTextTrackInTranscriptWrapper : function( components ){
    let transcriptBodyEl = $( components.transcriptEl ).find(".transcript-body");
    appendChildToParent( components.transcriptContainerEl, transcriptBodyEl  );
  }
}

const showModal = function( btnEl, modalEl ){
  let hideClass = $( btnEl ).data("modalHide");
  modalEl.toggleClass(hideClass);
}


export {
  transcriptVideo
}
