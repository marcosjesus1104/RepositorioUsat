//Mostrar ventana emergente 
$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has pulsado el enlace. Ahora saldras a la Pagina de la USAT")
    });
});

//Ocultar o Mostrar  una caja
$("#click").click(function(){
    $("#contenedor1").toggle(1500);
    },function(){
    $("#contenedor1").toggle(1500);
    });
