$(document).ready(function() {
  $("a#aboutme").click(function () {
    hideAll();
    complete.restart();
    $("div#aboutme").toggleClass("invisible");
  });
  $("a#contact").click(function () {
    console.log("hello");
    complete.restart();
  });
  $("a#projects").click(function () {
    console.log("hello");
    complete.restart();
  });
  $("a#resume").click(function () {
    console.log("hello");
    complete.restart();
  });
  $("a#photography").click(function () {
    console.log("hello");
    complete.restart();
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
