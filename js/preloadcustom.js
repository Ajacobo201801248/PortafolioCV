
$(window).on("load", function(){
	
  /*Al terminar de cargar el sitio, primero se va la animación del Preloader*/
  $("#loader").fadeOut(1500);
  /*Medio segundo despues, se va poco a poco el fondo del preloader*/
  $("#loader-wrapper").delay(1500).fadeOut("slow")
})