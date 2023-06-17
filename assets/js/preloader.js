(function ($) {
  "use strict";

  /*============= preloader js css =============*/
  var cites = [];
  cites[0] =
    "Leave no man behind";
  cites[1] = "Iron sharpens iron";
  cites[2] = "Free and open to all men";
  cites[3] = "Leave no man where wyou found him";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  $("#preloader p").text(cite);
  $("#preloader").addClass("loading");

  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(400, function () {
        $("#preloader").removeClass("loading");
      });
    }, 400);
  });
})(jQuery);
