$(document).ready(function () {
//materialize inits
  $(".collapsible").collapsible();
  $(".sidenav").sidenav();
  $(".carousel").carousel();
  $('.modal').modal();
  $('select').formSelect();

  var elem = document.querySelector(".collapsible.expandable");
  var instance = M.Collapsible.init(elem, {
    accordion: false,
  });

// back to top
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });


// smooth scrolling
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
  });
});

$('.main-gallery').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
