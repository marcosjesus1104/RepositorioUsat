function juego() {
    var numero, secreto, intentos = 0;
    var mensaje=true;
    secreto = Math.floor(Math.random() * 11);
    while ( intentos<5 ){
        if(mensaje==false){
            break;
        }
        numero = parseInt(prompt("Acierta un número entre 0 y 10", ""));
        if(numero>=0 && numero<11){
            if (numero == secreto) {
                alert("Acertaste, el numero secreto es " + secreto);
                break;
            }
            else {
                if (numero > secreto) {
                    alert("El número es más pequeño");
                    mensaje=confirm("¿Quieren seguir continuando con el juego o no?");
                }
                else {
                    alert("El número es más grande");
                    mensaje=confirm("¿Quieren seguir continuando con el juego o no?");
                }
            }
        }else{
            mensaje=confirm("¿Quieren seguir continuando con el juego o no?");
        }
        intentos = intentos + 1;
        alert("Vas "+ intentos+" intentos");
    }
}
