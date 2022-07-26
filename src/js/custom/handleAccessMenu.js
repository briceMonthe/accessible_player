

const addAccessMenu = ( videoResize ) => {
  $(".video-js").append( $(".access-menu") );
  handleProfileBtn();

  $("#contrast-btn" ).on("click", function(e){
    videoResize.contrastVideo();
  })
}


const handleProfileBtn = () => {
  $(".access-menu-btn, .settings-menu-btn, .menu-btn-show").on("click", function(){
    $(this).parent().addClass( $(this).data("class") );
  })

  $(".profils-menu-btn, .settings-menu-btn, .subtitles-menu-btn, .menu-btn-remove").on("click", function(){
    $(".access-menu").removeClass( $(this).data("class") );
    $(".menu").removeClass( $(this).data("class") );
  });

  $(".subtitles-menu-btn, .font-menu-btn").on("click", function(){
    $(".settings-menu").removeClass( $(this).data("class") );
  })
}



export { addAccessMenu };
