import {appendChildToParent, toggleClassToEl} from "./operationsClassEl.js";
import {getTranscriptAlignmentFromCookie, updateProfileFromCookie} from "./third-party-api.js";


const transcriptVideo = (function(){
    return {
      instance : null,
      transcriptAlignment : "vertical",
      components : {
        transcriptContainerEl : null,
        wrapperTranscriptEl : null,
        transcriptEl : null,
        wrapperTranscript: null,
      },
      setTranscriptAlignment : function( alignment ){
        this.transcriptAlignment = alignment
        updateProfileFromCookie("transcriptAlignment", alignment );
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
      getInstance : async function( player ){
        if( this.instance )
          return this.instance;

        await this.loadTranscriptVideo( player );
        this.setInstance( this );
        return this;

      },
      setAlignment : function( alignment ){
        let videoResizeContainerEl = $("#concentration-plus");
        let htmlDocEl = $("html");
        if( alignment  === "horizontal" ) {
          videoResizeContainerEl.addClass("horizontal");
          htmlDocEl.attr("data-align", "horizontal");
        }else{
          htmlDocEl.removeAttr("data-align");
          videoResizeContainerEl.removeClass(" horizontal ");
        }

        this.setTranscriptAlignment( alignment );
      },
      loadTranscriptVideo : async function( player ){
        let components = {};
        let wrapperTranscript = $("#transcript");
        let transcriptContainerEl = wrapperTranscript.find(".wrapper__transcript").first();
        let transcriptEl = null;
        components = {
          wrapperTranscript, transcriptEl, transcriptContainerEl
        }
        await this.loadTextTrackForTranscript( components, player );

        let alignment = getTranscriptAlignmentFromCookie();
        if( alignment ) {
          this.setAlignment(alignment);
          this.setTranscriptAlignment( alignment );
        }

      },
      displayWrapperTranscript : function( className ){
        toggleClassToEl( this.components.wrapperTranscript, className );
      },
      addEventsTranscript : function( instance ){

        let settingBtnEl = $(".wrapper__icon-setting");
        let modalEl = $("#transcript-modal-align");

        settingBtnEl.on( "click", function(e){
          showModal( this, modalEl);
        });

        $(".alignment__btn").on( "click" , function(e){
          let alignDisplay = $(this).data("boxAlign");
          instance.setAlignment( alignDisplay );
          showModal( this, modalEl );
        })

        $(".modal__content").on("click", function(e){
          e.stopPropagation();
        })

        modalEl.on("click", function(e){
          showModal( this, modalEl );
        })



      },
      loadTextTrackForTranscript : async function( components , player) {
        let options = {
          showTitle: true,
          autoscroll: true,
          clickArea: 'line',
          followPlayerTrack: true,
          stopScrollWhenInUse: false,
        };
        let transcript = player.transcript(options);
        console.log( transcript );
        components.transcriptEl = await transcript.el();
        this.addTextTrackInTranscriptWrapper( components );
        this.setComponents( components );
        this.addEventsTranscript( this );
      },
      addTextTrackInTranscriptWrapper : function( components ){
        let transcriptBodyEl = $( components.transcriptEl ).find(".transcript-body");
        appendChildToParent( components.transcriptContainerEl, transcriptBodyEl  );
      }
    }
})()

const showModal = function( btnEl, modalEl ){
  let hideClass = $( btnEl ).data("modalHide");
  modalEl.toggleClass(hideClass);
}


export {
  transcriptVideo
}
