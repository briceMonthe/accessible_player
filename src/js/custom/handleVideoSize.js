import {
  addChildAfterEl,
  addClassToEl,
  appendChildToParent,
  prependChildToParent,
  removeClassToEl,
  findEl,
  getPropertyValue,
  setAttrEl,
  getHTMLEl,
  setPropertyValue,
  setCssProperty,
  getWidthFromElInPercent,
  getWidthInPerc
} from "./operationsClassEl.js";

let videoSize = {
  crrSize : 0,
  tempSize: 0,
  components : {
    videoAccessEl : null,
    container: null,
    containerLeft : null,
    containerRight : null,
    modalEl : null,
  },
  instance : null,
  setComponents : function( components ){
    this.components = {
      ...this.components,
      ...components,
    }
  },
  setCrrSize : function( crrSize ){
    this.crrSize = crrSize;
  },
  setTempSize : function( tempSize ){
    this.tempSize = tempSize;
  },
  loadVideoSizeComponent : function( components ){
    this.setComponents( components );
  },
  getInstance : function (){
    if( this.instance )
      return this.instance;

    handleVideoSize( this );
    this.instance = this;
    return this;
  },
  switchToLSFPlusProfile : function(bigPlayPauseContainerEl, previousElFromBigPlayContainerEl, state, className   ){
    this.createTwoAsideContainers( this, this.components, bigPlayPauseContainerEl, previousElFromBigPlayContainerEl, state, className,"lsf-plus" )
  },
  switchToConcentrationPlusProfile : function(bigPlayPauseContainerEl, previousElFromBigPlayContainerEl, state, className   ){
    this.createTwoAsideContainers(this,  this.components, bigPlayPauseContainerEl, previousElFromBigPlayContainerEl, state, className, "concentration-plus" )
  },
  createTwoAsideContainers : function(instance, { globalContainer,  signVideoEl, container, videoAccessEl, containerLeft, containerRight }, bigPlayPauseContainerEl,  previousElFromBigPlayContainerEl , state, className, id  ){
    let newVideoContainerEl = null;
    id  ===  "lsf-plus" ? newVideoContainerEl = containerRight : newVideoContainerEl = containerLeft;

    if( state !== "hide" ){
      $(container).find( newVideoContainerEl ).prepend( videoAccessEl );
      removeClassToEl( container, className)
      prependChildToParent( globalContainer, container );
      setPropertyValue(container, "id", id);
      id === "lsf-plus" ? addVideoSign( containerLeft, signVideoEl ) : removeVideoSign(containerLeft, signVideoEl );
    }

    if( state === "hide" ){
      addClassToEl( container , className)
      prependChildToParent( globalContainer, videoAccessEl );
    }

    if( findEl( container, bigPlayPauseContainerEl).length ){
      addChildAfterEl( previousElFromBigPlayContainerEl,bigPlayPauseContainerEl )
    }else{
      appendChildToParent( containerLeft,  bigPlayPauseContainerEl );
    }

  },
}

const createMoveSeparator = function( instance,{ container, containerLeft, containerRight , btnResizeEl} ) {
  let btnResizeHTMLEl = getHTMLEl(btnResizeEl);
  btnResizeHTMLEl.addEventListener('mousedown', (downEvent) => {
    downEvent.preventDefault();
    let shiftX = downEvent.clientX - containerRight.get(0).offsetLeft;

    function _moveListener(e) {
      e.preventDefault();
      let mouseXInContainer = e.clientX - shiftX - container.get(0).offsetLeft;
      let perc = getWidthInPerc( container.get(0).offsetWidth, mouseXInContainer );
      if( 100 - perc < 10  ){
        return;
      }
      setCssProperty( containerLeft, "flexBasis", `${perc}%` );
      setCssProperty( containerRight, "flexBasis",  `${ ( 100 - perc ) }%`);
    }

    function _upListener(e) {
      e.preventDefault();
      updateCrrSize(instance, container, containerLeft.get(0).offsetWidth );
      container.get(0).removeEventListener('mousemove', _moveListener);
      document.removeEventListener('mouseup', _upListener);
    }
    container.get(0).addEventListener('mousemove', _moveListener);
    document.addEventListener('mouseup', _upListener);
  });
}

const addVideoSign = ( containerLeft, signVideoEl ) => {
  removeClassToEl( containerLeft, "container__left--hide-video" );
  prependChildToParent( containerLeft, $(signVideoEl) );
}

const removeVideoSign = ( containerLeft ) => {
  addClassToEl( containerLeft, "container__left--hide-video");
}

const addEventsVideoSize = (instance, { components, crrSize } ) => {
  $(".container__btn-setting" ).on( "click", function(e){
    let currSize = getWidthFromElInPercent( components.containerLeft, components.container );
    instance.setCrrSize( parseInt(currSize) );
    updateInputSize( instance, components.inputEl, instance.crrSize)
    showModal( this, components.modalEl);
  });

  $(".container__input").on("change", function(e){
    let currValue = e.currentTarget.valueAsNumber;
    changeSize( instance, components.inputEl, currValue, 0 );
  });

  $(".container__btn").on("mousedown", function(e){
    let addValue = parseInt( $(this).data("add") );
    let currValue = parseInt( getPropertyValue( components.inputEl, "valueAsNumber") );
    changeSize(instance,  components.inputEl, currValue, addValue );
  });

  $(".modal__btn-action" ).on( "click", function(e){
    showModal( this, components.modalEl);
    saveSize(instance, this, components.inputEl );
    updateContainerLeft( components.containerLeft, components.containerRight, instance.crrSize );
  });
}

const showModal = function( btnEl, modalEl ){
  let hideClass = $( btnEl ).data("modalHide");
  modalEl.toggleClass(hideClass);
}

const saveSize =(instance,  btnEl, inputEl) => {
  let action = $(btnEl).data("action");
  if( action && action == "save" )
    instance.setCrrSize( instance.tempSize );

  if( action && action === "abort" )
    changeSize( inputEl, instance.crrSize, 0 );
}


const updateContainerLeft = function( containerLeft, containerRight, newSize ){
  setCssProperty( containerLeft, "flexBasis", `${ newSize }%` );
  setCssProperty( containerRight, "flexBasis", `${( 100 - newSize )}%` );
}

const updateCrrSize = function (instance,  container, newSize ){
  let widthContainer = getPropertyValue(container, "offsetWidth");
  instance.setCrrSize( parseInt( ( newSize * 100 ) / widthContainer ) );
}

const updateInputSize = function( instance, inputEl, updateValue ){
  changeSize( instance, inputEl, updateValue, 0);
}

const changeSize = function(instance,  inputEl, previousValue, addValue ){
  let newValue = previousValue + addValue;
  if( newValue >= 0 && newValue <= 80 ){
    instance.setTempSize( newValue );
    setPropertyValue( inputEl, "valueAsNumber", newValue)
  }
}

const builtSignVideo = function( videoAccessEl ){
  /**
   * Add Sign Video After Original Video
   */
  let signVideo = $(videoAccessEl ).clone(true, true);
  addClassToEl( signVideo, "sign-video")
  let signVideoHTML = getHTMLEl( signVideo );
  let videoAccessId = getPropertyValue( videoAccessEl, "id");
  setAttrEl( signVideo,"id", `sign-${ videoAccessId }` );

  /**
   * Change the src of the Access Video
   */
  const srcElement = findEl( signVideo, "source");
  setAttrEl( srcElement, "src", srcElement.data("signSrc") );
  setAttrEl( signVideo, "src", srcElement.data("signSrc") );

  $(videoAccessEl).on("playing pause seeked timeupdate ended seeking volumechange", function(e) {
    switch ( e.type ) {
      case "playing":
        signVideoHTML.play()
        break;
      case "pause":
        signVideoHTML.pause();
        break;
      case "seeked":
        break;
      case "timeupdate":
        //console.log( signVideo.prop("currentTime" ), $(videoAccessEl).prop( "currentTime") )
        break;
      case "seeking":
        signVideo.prop("currentTime", $(videoAccessEl).prop( "currentTime") );
        break;

      case "volumechange":
        [signVideoHTML.volume, signVideoHTML.muted ]  = [ $(videoAccessEl).get(0).volume, $(videoAccessEl).get(0).muted ];
        break;

    }
  })

  return signVideo;
}

const handleVideoSize = ( instance ) => {
  let components = {};
  let container = $(".profile-container");
  components.container = container;
  components.containerLeft = findEl( container, ".container__left");
  components.containerRight = findEl(container, ".container__right");
  components.modalEl = $("#modal-input");
  components.inputEl = findEl(components.modalEl, ".container__input");
  components.globalContainer = $("#video_access");
  components.videoAccessEl = findEl( components.globalContainer, "#video_access_html5_api");
  components.signVideoEl = builtSignVideo( components.videoAccessEl );
  components.btnResizeEl = findEl( container, ".container__btn.container__btn-resize");
  instance.loadVideoSizeComponent( components );
  addEventsVideoSize( instance, instance );
  createMoveSeparator( instance, instance.components  );
}

export {
  videoSize
}
