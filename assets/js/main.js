function contador_pares_impares(){
    let numeroIngresadoPorUsuario= parseInt(prompt("Ingresa el numero que quieras: "));
    let pares=0;
    let impares=0;
  
  for(let i=1; i<=numeroIngresadoPorUsuario; i++){
    if(i%2===0){
        pares++;
    }else{
        impares++;
    }
  }
  alert("cantidad de numeros pares: "+pares)
  alert("cantidad de numeros impares: "+impares)
  }
  
  function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
      let factorial = 1;
    
     for (let i = 2; i <= numero; i++) {
      factorial *= i;
    }
    
    return factorial;
   }
  
   function validarContraseña(){
    let contraseñaIngresada=prompt("Ingresa tu contraseña")
    if(contraseñaIngresada==="secreto123"){
      alert("acceso concedido.")
    }else{
      alert("aceso denegado.")
    }
  }
  
  function tablaDeMultiplicar(){
    let numeroIngresadoPorUsuario = prompt("Ingresa un número para obtener su tabla de multiplicar:");
    let tabla = "";
  
    for(let i = 1; i <= 10; i++){
        tabla += numeroIngresadoPorUsuario + " x " + i +" = " + numeroIngresadoPorUsuario * i +"\n" 
    }
  
    alert(tabla);
  }
  
  function esPrimo(numero) {
    for (let i = 2, raizCuadrada = Math.sqrt(numero); i <= raizCuadrada; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero > 1;
  }
  
  function sumaPrimerosPrimos(N) {
    let suma = 0;
    let contador = 0;
    let numeroActual = 2;
  
    while (contador < N) {
      if (esPrimo(numeroActual)) {
        suma += numeroActual;
        contador++;
      }
      numeroActual++;
    }
  
    return suma;
  }
  
  function fibonacci(n) {
    let sequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  
    return sequence;
  }
  
  function convertirTemperatura(temperatura, direccion) {
    if (direccion === "1") {
      // Convertir de Celsius a Fahrenheit
      return (temperatura * 9/5) + 32;
    } else if (direccion === "2") {
      // Convertir de Fahrenheit a Celsius
      return (temperatura - 32) * 5/9;
    } else {
      return 'Dirección de conversión inválida';
    }
           
  }
  
  function calcularPotencia(){
    let base = parseFloat(prompt("Ingrese el número base:"));
    let exponente = parseInt(prompt("Ingrese el exponente:"));
  
    let resultado = Math.pow(base, exponente);
  
    alert("El resultado de "+base+ " elevado a la potencia "+ exponente +" es: " +resultado);
  }

    var contadorUno=0
    var contadorDos=0
    var contadorTres=0
    var contadorCuatro=0
    var contadorCinco=0
    var contadorSeis=0
    var contadorSiete=0
    var contadorOcho=0
    var opcionMasSeleccionada=contadorUno
    
  do{
    var opcionUsuario=Number(prompt("Bienvenido apreciado usuario, este es tu menu: \n1. contador de numeros pares e impares \n2. calculadora de factorial \n3. validacion de contraseña \n4. Generador de tablas de multiplicar \n5. suma de numeros primos \n6. secuencia fibonacci \n7. convertidor de temperatura \n8. calculadora de potencia \n9.SALIR"))
    switch(opcionUsuario){
        case 1:
            let opcionUno=parseInt(prompt("Este ejercicio consiste en un programa que solicita al usuario un número y luego muestra la cantidad de números pares e impares dentro del rango desde 1 hasta el número ingresado.\nDesea ejecutar la opcion uno?  \n1. si \n2. no")) 
            if(opcionUno==1){
                contador_pares_impares()
                contadorUno++
            }else alert("Decidiste no ejecutar la opcion uno, por lo tanto te regresaremos al menu principal")
            break

        case 2:
          let opcionDos=parseInt(prompt("Este ejercicio consiste en un programa que calcula el factorial de un número ingresado por el usuario  \nDesea ejecutar la opcion dos? \n1. si \n2. no"))
            if(opcionDos==1){
              calcularFactorial()
              let numero = prompt("Ingrese un numero");
              let factorialCalculado = calcularFactorial(numero);
              alert("El factorial de " + numero + " es: " + factorialCalculado);
              contadorDos++
            }else alert("Decidiste no ejecutar la opcion dos, por lo tanto te regresaremos al menu principal")
            break

        case 3:
              let opcionTres=parseInt(prompt("Este ejercicio consiste en un programa que pide al usuario que ingrese una contraseña para verificar si tiene acceso a nuestra base de datos \nDesea ejecutar la opcion tres? \n1. si \n2. no"))
                if(opcionTres==1){
                  validarContraseña()
                  contadorTres++
                }else alert("Decidiste no ejecutar la opcion tres, por lo tanto te regresaremos al menu principal")
                break

        case 4:
          let opcionCuatro=parseInt(prompt("Este ejercicio consiste en un programa que solicita al usuario un número y luego muestra la tabla de multiplicar correspondiente a ese número \nDesea ejecutar la opcion cuatro? \n1. si \n2. no"))
            if(opcionCuatro==1){
              tablaDeMultiplicar()
              contadorCuatro++
            }else alert("Decidiste no ejecutar la opcion cuatro, por lo tanto te regresaremos al menu principal")
            break

        case 5:
              let opcionCinco=parseInt(prompt("Este ejercicio consiste en un programa que calcula la suma de los primeros N números primos, donde N es ingresado por el usuario \nDesea ejecutar la opcion cinco? \n1. si \n2. no"))
                if(opcionCinco==1){
                  sumaPrimerosPrimos()
                  var N = parseInt(prompt("A cuantos numeros primos desea calcular su suma:"));
                  var resultado = sumaPrimerosPrimos(N);
                  alert("La suma de los primeros "+ N + " números primos es: "+ resultado);
                  contadorCinco++
                }else alert("Decidiste no ejecutar la opcion cinco, por lo tanto te regresaremos al menu principal")
                break

        case 6:
          let opcionSeis=parseInt(prompt("Este ejercicio consiste en un programa que genera la secuencia de Fibonacci hasta un término dado por el usuario. \nDesea ejecutar la opcion seis? \n1. si \n2. no"))
            if(opcionSeis==1){
              fibonacci()
              let termino = parseInt(prompt("Ingresa el término deseado:"));
              let resultado = fibonacci(termino);
              alert(resultado);
              contadorSeis++
            }else alert("Decidiste no ejecutar la opcion seis, por lo tanto te regresaremos al menu principal")
            break

        case 7:
          let opcionSiete=parseInt(prompt("Este ejercicio consiste en un programa que convierte temperaturas entre grados Celsius y Fahrenheit, permitiendo al usuario elegir la dirección de la conversión (de Celsius a Fahrenheit o de Fahrenheit a Celsius) \nDesea ejecutar la opcion siete? \n1. si \n2. no"))
            if(opcionSiete==1){
              let temperatura = prompt("Ingrese temperatura");
              let direccion = prompt("Ingresa direccion:\n 1. CF: Grados celcius a farenheit \n 2. FC: Grados Farenheit a celcius "); // Cambia a 'FC' para convertir de Fahrenheit a Celsius
              let temperaturaConvertida = convertirTemperatura(temperatura, direccion);
              alert('Temperatura convertida: '+ temperaturaConvertida);
              contadorSiete++
            }else alert("Decidiste no ejecutar la opcion siete, por lo tanto te regresaremos al menu principal")
            break

        case 8:
          let opcionOcho=parseInt(prompt("Este ejercicio consiste en un programa que calcula el resultado de elevar un número a una potencia dada por el usuario.  \nDesea ejecutar la opcion ocho? \n1. si \n2. no"))
            if(opcionOcho==1){
              calcularPotencia()
              contadorOcho++
            }else alert("Decidiste no ejecutar la opcion ocho, por lo tanto te regresaremos al menu principal")
            break

        case 9:
            alert("Recuento de usos de nuestro programa: \n Ejercicio uno: "+contadorUno+" usos"+"\n Ejercicio dos: "+contadorDos+" usos"+"\n Ejercicio tres: "+contadorTres+" usos"+"\n Ejercicio cuatro: "+contadorCuatro+" usos"+"\n Ejercicio cinco: "+contadorCinco+" usos"+"\n Ejercicio seis: "+contadorSeis+" usos"+"\n Ejercicio siete: "+contadorSiete+" usos"+"\n Ejercicio ocho: "+contadorOcho+" usos")
            if(contadorUno>opcionMasSeleccionada){
                opcionMasSeleccionada=contadorUno
                alert("la opcion mas seleccionada fue la uno con  "+opcionMasSeleccionada +" usos")
            }else if(contadorDos>opcionMasSeleccionada){
                opcionMasSeleccionada=contadorDos
                alert("la opcion mas seleccionada fue la dos con "+opcionMasSeleccionada+" usos")
            }else if(contadorTres>opcionMasSeleccionada){
                opcionMasSeleccionada=contadorTres
                alert("la opcion mas seleccionada fue la tres con "+opcionMasSeleccionada+" usos")
            }else if(contadorCuatro>opcionMasSeleccionada){
                opcionMasSeleccionada=contadorCuatro
                alert("la opcion mas seleccionada fue la cuatro con "+opcionMasSeleccionada+" usos")
            }else if(contadorCinco>opcionMasSeleccionada){
                opcionMasSeleccionada=contadorCinco
                alert("la opcion mas seleccionada fue la cinco con "+opcionMasSeleccionada+" usos")
            }else if(contadorSeis>opcionMasSeleccionada){
                opcionMasSeleccionada=contadorSeis
                alert("la opcion mas seleccionada fue la seis con "+opcionMasSeleccionada +" usos")
            }else if(contadorSiete>opcionMasSeleccionada){
                opcionMasSeleccionada=contadorSiete
                alert("la opcion mas seleccionada fue la siete con "+opcionMasSeleccionada+" usos")
            }else if(contadorOcho>opcionMasSeleccionada){
                opcionMasSeleccionada=contadorOcho
                alert("la opcion mas seleccionada fue la ocho con "+opcionMasSeleccionada+" usos")
            }
                 
    }
  
}while(opcionUsuario!=9)
