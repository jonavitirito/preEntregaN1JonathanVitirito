let nombreUsuario=prompt("Por favor, ingrese su nombre");
let opciones=parseInt(prompt("Bienvenido "+nombreUsuario+" seleccione la opción según su necesidad, /n 1-cotizaciones /n 2-Ver nuestras sucursales /n 3-Ver contactos /n 4-salir"));
const salir=4;
let valorDePuertaNegro=15000;
let valorDePuertaBlanco=12000;
let valorDePuertaSimilMadera=20000;
let valorDeVentanaCorredizaNegro=11000;
let valorDeVentanaCorredizaBlanco=9000;
let valorDeVentanaCorredizaSimilMadera=17500;
let valorDeVentanaDeAbrirNegro=13540;
let valorDeVentanaDeAbrirBlanco=11780;
let valorDeVentanaDeAbrirSimilMadera=19147;
let IVA=1.21;
let cantidadDeProducto=0;

while(opciones!=salir){
    switch(opciones){
        case 1: cotizacionDeProductos();
        break;
        case 2:verSucursales();
        break;
        case 3: verDescuentos();
        break;
        case 4:
        break;
          default:alert("usted ingresó una opción incorrecta, vuelva a intentarlo");
          break;

    }
 opciones=parseInt(prompt("Bienvenido "+nombreUsuario+" seleccione la opción según su necesidad, /n 1-cotizaciones /n 2-calcular impuestos /n 3-Ver contactos /n 4-salir"));

}
alert("Gracias por visitar AlumTech, vuelva pronto.")
function cotizacionDeProductos(){
    let productos=parseInt(prompt("Seleccione el producto a cotizar: 1-Puerta, 2-Ventana Corrediza, 3-Ventana de abrir, 4-Para volver al inicio"));
    while(productos!=salir){
    switch(productos){
        case 1:puerta();
        break;
        case 2:ventanaCorrediza();
        break;
        case 3:ventanaDeAbrir();
        break;
        case 4:
        break;
        default: alert("Seleccionó un producto incorrecto, vuelva a intentarlo")
        break;
        

    }
    productos=parseInt(prompt("Seleccione el producto a cotizar: 1-Puerta, 2-Ventana Corrediza, 3-Ventana de abrir, 4-Para volver al inicio"));

}
}

function puerta(){
    let color=parseInt(prompt("Seleccione un color de la puerta: 1-Negro Mate, 2-Blanco Brillante, 3-Simil Madera, 4-Para volver"))
    while(color!=salir){
        switch(color){
            case 1: cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto"));
            puertaNegro(valorDePuertaNegro);
            
            break;
            case 2:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto")); 
            puertaBlanco(valorDePuertaBlanco);
            break;
            case 3:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto"));
            puertaSimilMadera(valorDePuertaSimilMadera);
            break;
        }
        color=parseInt(prompt("Seleccione un color de la puerta: 1-Negro Mate, 2-Blanco Brillante, 3-Simil Madera, 4-Para volver"))
    }
}
 
       
    
function puertaNegro(valorDePuertaNegro){
    const resultado= IVA * valorDePuertaNegro*cantidadDeProducto;
    alert("El valor del producto Puerta en color Negro Mate con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDePuertaNegro*cantidadDeProducto;
    alert("El valor del producto Puerta en color Negro Mate sin IVA incluído es:$ "+resultadoSinIva);
}
function puertaBlanco(valorDePuertaBlanco){
    const resultado= IVA * valorDePuertaBlanco*cantidadDeProducto;
    alert("El valor del producto Puerta en color Blanco Brillante con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDePuertaBlanco*cantidadDeProducto;
    alert("El valor del producto Puerta en color Blanco Brillante sin IVA incluído es:$ "+resultadoSinIva);
}
function puertaSimilMadera(valorDePuertaSimilMadera){
    const resultado= IVA * valorDePuertaSimilMadera*cantidadDeProducto;
    alert("El valor del producto Puerta en color Simil Madera con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDePuertaSimilMadera*cantidadDeProducto;
    alert("El valor del producto Puerta en color Simil Madera sin IVA incluído es:$ "+resultadoSinIva);
}
function ventanaCorrediza(){
    let color=parseInt(prompt("Seleccione un color de la ventana corrediza: 1-Negro Mate, 2-Blanco Brillante, 3-Simil Madera, 4-Para volver"));
    while(color!=salir){
        switch(color){
            case 1: cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto"));
            ventanaCorredizaNegra(valorDeVentanaCorredizaNegro);
            break;
            case 2:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto")); 
            ventanaCorredizaBlanco(valorDeVentanaCorredizaBlanco);
            break;
            case 3:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto"));
            ventanaCorredizaSimilMadera(valorDeVentanaCorredizaSimilMadera);
            break;
        }
        color=parseInt(prompt("Seleccione un color de la ventana corrediza: 1-Negro Mate, 2-Blanco Brillante, 3-Simil Madera, 4-Para volver"));
    }
}
function ventanaCorredizaNegra(valorDeVentanaCorredizaNegro){
    const resultado= IVA * valorDeVentanaCorredizaNegro*cantidadDeProducto;
    alert("El valor del producto Ventana Corrediza en color negro mate con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDeVentanaCorredizaNegro*cantidadDeProducto;
    alert("El valor del producto Ventana Corrediza en color negro mate sin IVA incluído es:$ "+resultadoSinIva);
}
function ventanaCorredizaBlanco(valorDeVentanaCorredizaBlanco){
    const resultado= IVA * valorDeVentanaCorredizaBlanco*cantidadDeProducto;
    alert("El valor del producto Ventana Corrediza en color Blanco Brillante con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDeVentanaCorredizaBlanco*cantidadDeProducto;
    alert("El valor del producto Ventana Corrediza en color Blanco Brillante sin IVA incluído es:$ "+resultadoSinIva);
}
function ventanaCorredizaSimilMadera(valorDeVentanaCorredizaSimilMadera){
    const resultado= IVA * valorDeVentanaCorredizaSimilMadera*cantidadDeProducto;
    alert("El valor del producto Ventana Corrediza en color Simil Madera con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDeVentanaCorredizaSimilMadera*cantidadDeProducto;
    alert("El valor del producto Ventana Corrediza en color Simil Madera sin IVA incluído es:$ "+resultadoSinIva);
}
function ventanaDeAbrir(){
    let color=parseInt(prompt("Seleccione un color de la ventana de abrir: 1-Negro Mate, 2-Blanco Brillante, 3-Simil Madera, 4-Para volver"));
    while(color!=salir){
        switch(color){
            case 1:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto")); 
            ventanaDeAbrirNegro(valorDeVentanaDeAbrirNegro);
            if(cantidadDeProducto>=3){ventanaDeAbrirNegro-descuento}
            break;
            case 2:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto"));
            ventanaDeAbrirBlanco(valorDeVentanaDeAbrirBlanco);
            break;
            case 3:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto"));
            ventanaDeAbrirSimilMadera(valorDeVentanaDeAbrirSimilMadera);
            break;
        }
        color=parseInt(prompt("Seleccione un color de la ventana de abrir: 1-Negro Mate, 2-Blanco Brillante, 3-Simil Madera, 4-Para volver"));
    }
}
function ventanaDeAbrirNegro(valorDeVentanaDeAbrirNegro){
    const resultado= IVA * valorDeVentanaDeAbrirNegro*cantidadDeProducto;
    alert("El valor del producto Ventana de abrir en color negro mate con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDeVentanaDeAbrirNegro*cantidadDeProducto;
    alert("El valor del producto Ventana de abrir en color negro mate sin IVA incluído es:$ "+resultadoSinIva);
}
function ventanaDeAbrirBlanco(valorDeVentanaDeAbrirBlanco){
    const resultado= IVA * valorDeVentanaDeAbrirBlanco*cantidadDeProducto;
    alert("El valor del producto Ventana de abrir en color blanco brillante con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDeVentanaDeAbrirBlanco*cantidadDeProducto;
    alert("El valor del producto Ventana de abrir en color blanco brillante sin IVA incluído es:$ "+resultadoSinIva);
}
function ventanaDeAbrirSimilMadera(valorDeVentanaDeAbrirSimilMadera){
    const resultado= IVA * valorDeVentanaDeAbrirSimilMadera*cantidadDeProducto;
    alert("El valor del producto Ventana de abrir en color simil madera con IVA incluido es de $ " + resultado);
    const resultadoSinIva= valorDeVentanaDeAbrirSimilMadera*cantidadDeProducto;
    alert("El valor del producto Ventana de abrir en simil madera sin IVA incluído es:$ "+resultadoSinIva);
}
function verSucursales (){
    alert("Nuestras sucursales están en: -Lanús Este, Remedios de Escalada, calle Beron de Astrada 3361 (central) - Ruta 2 Km 38.5 Parque Industrial Pibera, lote 20.")
}
function verDescuentos(){
    
    alert("le ofrecemos los siguientes descuentos: Llevando 3 unidades o más se aplicará un descuento del 10%, o si llevas 10 unidades se aplicará un descuento de hasta un 25%");
}




