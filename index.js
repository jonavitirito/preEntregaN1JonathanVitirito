let nombreUsuario=prompt("Por favor, ingrese su nombre");
let opciones=parseInt(prompt("Bienvenido "+nombreUsuario+" seleccione la opción según su necesidad, \n1-cotizaciones \n2-Ver nuestras sucursales \n3-Ver descuentos \n4-Ver productos \n5-salir"));
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
let idDeProductos= 1;
class producto{
    constructor (idDeProductos,tipoDeProducto, precio, color){
        this.idDeProductos=idDeProductos;
        this.tipoDeProducto=tipoDeProducto;
        this.precio=precio;
        this.color=color;
    }
}
const arrayProductos = [];
const puerta1= new producto(idDeProductos++,"Puerta de Abrir", valorDePuertaNegro, "Negro mate");
arrayProductos.push(puerta1);
const puerta2= new producto(idDeProductos++,"Puerta de Abrir", valorDePuertaBlanco, "Blanco brillante");
arrayProductos.push(puerta2);
const puerta3= new producto(idDeProductos++,"Puerta de Abrir", valorDePuertaSimilMadera, "Simil madera");
arrayProductos.push(puerta3);
const ventanaCorrediza1= new producto(idDeProductos++,"Ventana Corrediza", valorDeVentanaCorredizaNegro, "Negro mate");
arrayProductos.push(ventanaCorrediza1);
const ventanaCorrediza2= new producto(idDeProductos++,"Ventana Corrediza", valorDeVentanaCorredizaBlanco, "Blanco brillante");
arrayProductos.push(ventanaCorrediza2);
const ventanaCorrediza3= new producto(idDeProductos++,"Ventana Corrediza", valorDeVentanaCorredizaSimilMadera, "Simil madera");
arrayProductos.push(ventanaCorrediza3);
const ventanaDeAbrir1= new producto(idDeProductos++,"Ventana de Abrir", valorDeVentanaDeAbrirNegro, "Negro mate");
arrayProductos.push(ventanaDeAbrir1);
const ventanaDeAbrir2= new producto(idDeProductos++,"Ventana de Abrir", valorDeVentanaDeAbrirBlanco, "Blanco brillante");
arrayProductos.push(ventanaDeAbrir2);
const ventanaDeAbrir3= new producto(idDeProductos++,"Ventana de Abrir", valorDeVentanaDeAbrirSimilMadera, "Simil madera");
arrayProductos.push(ventanaDeAbrir3);


console.log(arrayProductos);



while(opciones!=5){
    switch(opciones){
        case 1: cotizacionDeProductos();
        break;
        case 2:verSucursales();
        break;
        case 3: verDescuentos();
        break;
        case 4: verProductos();
        break;
        case 5:
            break;
          default:alert("usted ingresó una opción incorrecta, vuelva a intentarlo");
          break;

    }
 opciones=parseInt(prompt("Bienvenido "+nombreUsuario+" seleccione la opción según su necesidad, \n1-cotizaciones \n2-Ver nuestras sucursales \n3-Ver descuentos \n4-Ver productos \n5-salir"));

}
alert("Gracias por visitar AlumTech, vuelva pronto.")
function cotizacionDeProductos(){
    let productos=parseInt(prompt("Seleccione el producto a cotizar: \n1-Puerta, \n2-Ventana Corrediza, \n3-Ventana de abrir, \n4-Para volver al inicio"));
    while(productos!=4){
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
    productos=parseInt(prompt("Seleccione el producto a cotizar: \n1-Puerta, \n2-Ventana Corrediza, \n3-Ventana de abrir, \n4-Para volver al inicio"));

}
}

function puerta(){
    let color=parseInt(prompt("Seleccione un color de la puerta: \n1-Negro Mate, \n2-Blanco Brillante, \n3-Simil Madera, \n4-Para volver"))
    while(color!=4){
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
            default:alert("Seleccionó una opción inválida");
break;
        }
        color=parseInt(prompt("Seleccione un color de la puerta: \n1-Negro Mate, \n2-Blanco Brillante, \n3-Simil Madera, \n4-Para volver"))
    }
}
 
       
    
function puertaNegro(valorDePuertaNegro){
    
    let resultado= IVA * valorDePuertaNegro*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Puerta/s en color negro mate con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Puerta/s en color negro mate, con IVA incluido es de $ " + resultado);
}}
function puertaBlanco(valorDePuertaBlanco){
    const resultado= IVA * valorDePuertaBlanco*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Puerta/s en color blanco brillante con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Puerta/s en color blanco brillante, con IVA incluido es de $ " + resultado);
}}
function puertaSimilMadera(valorDePuertaSimilMadera){
    const resultado= IVA * valorDePuertaSimilMadera*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Puerta/s en color Simil madera con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Puerta/s en color Simil madera, con IVA incluido es de $ " + resultado);
}}
function ventanaCorrediza(){
    let color=parseInt(prompt("Seleccione un color de la ventana corrediza: \n1-Negro Mate, \n2-Blanco Brillante, \n3-Simil Madera, \n4-Para volver"));
    while(color!=4){
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
            default:alert("Seleccionó una opción inválida");
break;
        }
        color=parseInt(prompt("Seleccione un color de la ventana corrediza: \n1-Negro Mate, \n2-Blanco Brillante, \n3-Simil Madera, \n4-Para volver"));
    }
}
function ventanaCorredizaNegra(valorDeVentanaCorredizaNegro){
    const resultado= IVA * valorDeVentanaCorredizaNegro*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Ventana/s corrediza/s en color negro mate con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Ventana/s corrediza/s en color negro mate, con IVA incluido es de $ " + resultado);
}}
function ventanaCorredizaBlanco(valorDeVentanaCorredizaBlanco){
    const resultado= IVA * valorDeVentanaCorredizaBlanco*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Ventana/s corrediza/s en color blanco brillante con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Ventana/s corrediza/s en color blanco brillante, con IVA incluido es de $ " + resultado);
}}
function ventanaCorredizaSimilMadera(valorDeVentanaCorredizaSimilMadera){
    const resultado= IVA * valorDeVentanaCorredizaSimilMadera*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Ventana/s corrediza/s en color Simil maera con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Ventana/s corrediza/s en color Simil Madera, con IVA incluido es de $ " + resultado);
}}
function ventanaDeAbrir(){
    let color=parseInt(prompt("Seleccione un color de la ventana de abrir: \n1-Negro Mate, \n2-Blanco Brillante, \n3-Simil Madera, \n4-Para volver"));
    while(color!=4){
        switch(color){
            case 1:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto")); 
            ventanaDeAbrirNegro(valorDeVentanaDeAbrirNegro);
            break;
            case 2:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto"));
            ventanaDeAbrirBlanco(valorDeVentanaDeAbrirBlanco);
            break;
            case 3:cantidadDeProducto=parseInt(prompt("Ingrese la cantidad de producto"));
            ventanaDeAbrirSimilMadera(valorDeVentanaDeAbrirSimilMadera);
            break;
            default:alert("Seleccionó una opción inválida");
break;
        }
        color=parseInt(prompt("Seleccione un color de la ventana de abrir: \n1-Negro Mate, \n2-Blanco Brillante, \n3-Simil Madera, \n4-Para volver"));
    }
}
function ventanaDeAbrirNegro(valorDeVentanaDeAbrirNegro){
    const resultado= IVA * valorDeVentanaDeAbrirNegro*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Ventanta/s de abrir en color negro mate con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Ventana/s de abrir en color negro mate, con IVA incluido es de $ " + resultado);
}}
function ventanaDeAbrirBlanco(valorDeVentanaDeAbrirBlanco){
    const resultado= IVA * valorDeVentanaDeAbrirBlanco*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Ventanta/s de abrir en color blanco brillante con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Ventana/s de abrir en color blanco brillante, con IVA incluido es de $ " + resultado);
}}
function ventanaDeAbrirSimilMadera(valorDeVentanaDeAbrirSimilMadera){
    const resultado= IVA * valorDeVentanaDeAbrirSimilMadera*cantidadDeProducto;
    let descuentoAplicado=resultado-descuento(resultado,10);
    if(cantidadDeProducto>=3){alert("total de "+ cantidadDeProducto+" Ventanta/s de abrir en color Simil Madera con descuento del 10% aplicado es:$ "+descuentoAplicado)}else{
        alert("total de "+cantidadDeProducto+" Ventana/s de abrir en color Simil Madera, con IVA incluido es de $ " + resultado);
}}

function verSucursales (){
    alert("Nuestras sucursales están en: -Lanús Este, Remedios de Escalada, calle Beron de Astrada 3361 (central) - Ruta 2 Km 38.5 Parque Industrial Pibera, lote 20.")
}
function verDescuentos(){
    
    alert("le ofrecemos los siguientes descuentos: Llevando 3 unidades o más se aplicará un descuento del 10%");
}
function descuento(resultado, porcentaje){
    return resultado* porcentaje / 100
}


function verProductos(){
    let productos= parseInt(prompt("Seleccione producto a ver: \n 1-Puertas \n 2-Ventanas Corredizas \n 3-Ventanas de Abrir \n 4-Volver a Inicio"));
    while (productos!=4){
        switch(productos){
            case 1:mostrarPuerta("Puerta de Abrir");
            break;
            case 2:mostrarVentanaCorrediza("Ventana Corrediza");
            break;
            case 3:mostrarVentanaDeAbrir("Ventana de Abrir");
            break;
            case 4:
                break;
default:alert("Seleccionó una opción inválida");
break;
        }
    productos= parseInt(prompt("Seleccione producto a ver: \n 1-Puertas \n 2-Ventanas Corredizas \n 3-Ventanas de Abrir \n 4-Volver a Inicio"));
    }
}
function mostrarPuerta(tipoDeProducto){
    const filtrar= arrayProductos.filter((el)=>el.tipoDeProducto===tipoDeProducto);
    let mostrarProducto= "";
    filtrar.forEach((el,index)=>{
        mostrarProducto += "\n"+(index+1)+"-Producto: "+ el.tipoDeProducto + " "+ "\nPrecio: "+ el.precio + " " + "\nColor: "+ el.color
    });
    alert(mostrarProducto);
}
function mostrarVentanaCorrediza(tipoDeProducto){
    const filtrar= arrayProductos.filter((el)=>el.tipoDeProducto===tipoDeProducto);
    let mostrarProducto= "";
    filtrar.forEach((el,index)=>{
        mostrarProducto += "\n"+(index+1)+"-Producto: "+ el.tipoDeProducto + " "+ "\nPrecio: "+ el.precio + " " + "\nColor: "+ el.color
    });
    alert(mostrarProducto);
}
function mostrarVentanaDeAbrir(tipoDeProducto){
    const filtrar= arrayProductos.filter((el)=>el.tipoDeProducto===tipoDeProducto);
    let mostrarProducto= "";
    filtrar.forEach((el,index)=>{
        mostrarProducto += "\n"+(index+1)+"-Producto: "+ el.tipoDeProducto + " "+ "\nPrecio: "+ el.precio + " " + "\nColor: "+ el.color
    });
    alert(mostrarProducto);
}
