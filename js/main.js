$(document).ready(function() {
  $("a#aboutme").click(function () {
    hideAll();
    complete.restart();
    $("div#aboutme").removeClass("invisible");
  });
  $("a#contact").click(function () {
    hideAll();
    complete.restart();
    $("div#contact").removeClass("invisible");
  });
  $("a#projects").click(function () {
    hideAll();
    complete.restart();
    $("div#projects").removeClass("invisible");
  });
  $("a#resume").click(function () {
    hideAll();
    complete.restart();
    $("div#resume").removeClass("invisible");
  });
  $("a#photography").click(function () {
    hideAll();
    complete.restart();
    $("div#photography").removeClass("invisible");
  });

  function hideAll() {
    if (!$("div#aboutme").hasClass("invisible")) {
      $("div#aboutme").addClass("invisible");
    }
    if (!$("div#contact").hasClass("invisible")) {
      $("div#contact").addClass("invisible");
    }
    if (!$("div#projects").hasClass("invisible")) {
      $("div#projects").addClass("invisible");
    }
    if (!$("div#resume").hasClass("invisible")) {
      $("div#resume").addClass("invisible");
    }
    if (!$("div#photography").hasClass("invisible")) {
      $("div#photography").addClass("invisible");
    }
  }

  var complete = anime({
      targets: '.other-side',
      translateX: [
        { value: 100, duration: 1200 },
        { value: 0, duration: 800 }
      ],
      duration: 2000,
      complete: function(anim) {
        console.log("complete");
      }
    });
});
