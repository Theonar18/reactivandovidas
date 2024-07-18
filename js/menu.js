$(document).ready(function(){

    $(".toggle").on("click", function() {
        $(".menu").toggleClass("menu_visible");
    });

});

/* BOTON IR AL CIELO */
// Seleccionamos el botón con jQuery
$('#bt-up').on('click', function() {
    // Animamos el scroll hacia arriba con una velocidad suave
    $('html, body').animate({ scrollTop: 0 }, {
      duration: 1000, // 1 segundo
      easing: 'swing' // tipo de animación suave
    });
  });

/* Scroll */

  var $buttonUp = $("#bt-up");

  $(window).on("scroll", function(){
    var scroll = $(document).scrollTop();
  
    if (scroll > 100){
      $buttonUp.css("transform", "scale(1)");
    } else if (scroll < 100){
      $buttonUp.css("transform", "scale(0)");
    }
  });
