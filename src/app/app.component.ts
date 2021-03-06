//Importamos la clase Component para recompilar metadatos de configuracion de componentes.
import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap/all';
import { Quad } from 'gsap';


declare var jQuery:any;
declare var $:any;

//Decorador de la clase Componente
@Component({

  //El Selector es la etiqueta personalizada que nos permite crear Angular en el HTML y donde se va a visualizar este componente.
  selector: 'app-root',

  //La plantilla url es la ruta de la vista HTML que va a imprimir este documento.
  templateUrl: './app.component.html',

  //La ruta del estilo es donde direccionemos la hoja d estilo exclusiva de este componente.
  styleUrls: ['./app.component.css']
})

//Exportamos la clase con el nombre que nosotros declaramos en el APP MODULE
export class AppComponent implements OnInit {


  ngOnInit(){
  
/*=============================================
PINTEREST GRID
=============================================*/

$('.pinterest_grid').pinterest_grid({
  no_columns: 4, //Número de columnas
  padding_x: 10, //Márgenes internas horizontal
  padding_y: 10, //Márgenes internas vertical
  margin_bottom: 50, //Márgen externa inferor
  single_column_breakpoint: 769 //Punto de quiebre para una sola columna
});

/*=============================================
EKKO LIGHTBOX
=============================================*/

$(document).on("click", "[data-toggle='lightbox']", function(e){

  e.preventDefault(); //Quitar eventos que vengan por defecto en el navegador
  $(this).ekkoLightbox(); //Activar la acción del plugin Ekko Lightbox

})

/*=============================================
MOUSE PARALLAX EFFECT - JQUERY
=============================================*/

var mouseParallax = $(".mouseParallax");

$(".mouseParallax").mousemove(function(e){

  var posX = e.offsetX;
  var posY = e.offsetY;

  for (var i = 0; i < mouseParallax.length; i++) {
    
    $(mouseParallax[i]).css({

      "width":"110%",
      "left":-posX / (i *250) + "%",
      "top":posY / (i *250) + "%"


    })
  }

  $(mouseParallax[0]).css({"width":"100%"})


})

/*=============================================
NAVEGACIÓN SCROLL
=============================================*/

$(".nav-link").click(function(e){

  e.preventDefault();

  var target = $(this).attr("href");
  
  $("html, body").animate({

    scrollTop: $(target).offset().top

  },1000, "easeOutBack")

})

/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
  scrollText: "",
  scrollSpeed:2000,
  easingType: "easeOutQuint"
})

$("#scrollUp").css({

  bottom: "20px",
  right: "20px",
  width: "50px",
  height: "50px",
  background: "url(../assets/img/flecha.jpg)"
})

/*=============================================
SUPER SCROLLORAMA
=============================================*/
var controller = $.superscrollorama();

    controller.addTween("#articulos .container", TweenMax.from(

  $("#articulos .container"), .25, {css:{marginLeft:"-100%"}, ease:Quad.easeInOut}

));

/*=============================================
STICKY JS
=============================================*/

if(window.matchMedia("(min-width:992px)").matches){

  $("#inicio").sticky({topSpacing:0, zIndex:1000});

}

/*=============================================
VALIDAR FORMULARIO ´POR BOOTSTRAP
=============================================*/

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

/*=============================================
ICHECK
=============================================*/

$(".icheck").iCheck({

  checkboxClass: "icheckbox_flat-blue",
  radioClass: "iradio_flat-blue"
})

}
}
