  //js para cambiar los colores del nav 
  $("li")
  .mouseover(function () {
  $(this).find(".drop-down").slideDown(300);
  $(this).find(".accent").addClass("animate");
  $(this).find(".item").css("color", "#0D0D0D");
  })
  .mouseleave(function () {
  $(this).find(".drop-down").slideUp(300);
  $(this).find(".accent").removeClass("animate");
  $(this).find(".item").css("color", "#FFFFFF");
  });