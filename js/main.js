// 1. Solicitar 3 numeros (entre el 1 y el 100) y definir cual es el mayor

// 2.  Solicitar 3 numeros (entre el 1 y el 100)y definir el menor de 3 numeros

// let a=prompt("¿Ingresa el primer numero del 1 al 100?", "" );
// let b=prompt("¿Ingresa el segundo numero del 1 al 100?", "" );
// let c=prompt("¿Ingresa el tercer numero del 1 al 100?", "" );

// parseFloat=(a );
// parseFloat=(b );
// parseFloat=(c );

// if ((a>b) && (a>c)){
//     console.log(a);
// } else if((b>c) && (b>a)){
//     console.log(b);
// }else if ((c>b) && (c>a)){
//     console.log(c);
// }

//segundo ejercicio
// let a=prompt("¿Ingresa el primer numero del 1 al 100?", "" );
// let b=prompt("¿Ingresa el segundo numero del 1 al 100?", "" );
// let c=prompt("¿Ingresa el tercer numero del 1 al 100?", "" );

// parseFloat=(a);
// parseFloat=(b);   
// parseFloat=(c);

// if ((a<b) && (a<c)){
//     console.log(a);
// } else if((b<c) && (b<a)){
//     console.log(b);
// }else if ((c<b) && (c<a)){
//     console.log(c);
// }


// //cuarto ejercicio
// let a=prompt("¿Ingresa un numero entero del 100 al 200?", "" );

// parseInt=(a);

// let rest=(a%3);

// if (rest == 0  ){
//     console.log(rest);
//     alert("Si es multiplo de 3");
// } else if (rest != 0 ) {
//     alert("No es multiplo de 3");
// }

// // ejercicio 5
// let a=prompt("¿Ingresa un numemero ?", "" );

// parseFloat=(a);

// let rest=(a%2);

// if (rest == 0  ){
//     console.log(rest);
//     alert("Si es par")
// } else if (rest != 0 ) {
//     alert("No es par")
// }

// ejercicio 6

// let a=parseInt(prompt("¿Ingresa el primer número?", "" ));
// let b=parseInt(prompt("¿Ingresa el segundo número?", "" ));
// let c=parseInt(prompt("¿Ingresa el tercer número?", "" ));


// if (a == (b + c)  ){
//     alert("la suma del  segundo y tercer numero es igual al primero ")
// } else if (b  == (a + c) ) {
//     alert("La suma del primero mas el tercero es igual al segundo")
// } else if (c == (a + b)) {
//     alert("La suma del primero mas el segundo es igual al tercero")
// }

// ejercio 3. Adivinar entre el 1 al 100 en el menor numero de pasos


    // alert("Piensa en un numero del 1 al 100 ");
    // prompt("A ese numero multipliquelo por 5");
    // prompt("Despues sumale 12");
    // prompt("Luego multipliquelo por 10");
    // prompt("despues sumele 5");
    // prompt("Multiplique por 2");
    //     let num=parseFloat(prompt("¿Que numero te dio de resultado"));
    //     let b= (num - 250);
    //     let a= (b / 100);
    //       alert("Tu numero es el :" + a);

    function adivinar() {
      let superior = 100;
      let inferior = 0;
      let noEncontrado = true;
      while (noEncontrado) {
        let mid = parseInt(inferior + ((superior-inferior) / 2));
        console.log(mid);
        console.log(((superior-inferior)/2));
        if(((superior-inferior)/2)<1){
          noEncontrado=false;
          alert("Tu numero es el " +  (parseInt(mid)+ 1));
          break;
        }
        let res = confirm("Tu numero es menor o igual a " + mid);
        if(res){
          superior=mid;
        }else{
          inferior=mid
        }//if
        console.log(inferior, superior);
      }//while
    }//adivinar
    adivinar();