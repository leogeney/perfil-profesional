//const constantes
const pi = 3.14;
const pul = 2.14;
//var globales
var cant_days = 10;
var name  = "leonardo jose";
// let  bloque o locales
let count = 5;
let i = 0;


/////////////////

//mostrar en pantalla
//alert(name)

//console

console.log(cant_days);

//body pantalla

document.write(name);
document.getElementById("text_one").innerHTML = "<h1>leonardo </h1>"
document.getElementById("text_two").innerText = "<h1>leonardo </h1>"
//librerias
Swal.fire({
    icon: 'success',
    title: 'leonardo el papasito',
    text : 'jugador del fpc',
    footer: name,
    showConfirmButton:false,
    timer :2000,
    background:'#000',
    color:'#ffff'

}
  )

  /// tipos de datos 
  //numericos
  let number_one =10;
  let number_two = 5.5;
  //string
  let text = "texto ";
  //boolean
  let boolean = true; // FLASE
let array_num=[1,2,3,4,5,6];
let array_text=["lunes" , "martes" , "miercoles"]
let array_mix= [1.5, "a" , 10, "b"];
let array_mul=[
    {name:"leo",last_name: "geney" , age:17},
    {name:"leonardo",last_name: "geney" , age:22},
    {name:"leonard",last_name: "geney" , age:20},
    {name:"ljgl",last_name: "geney" , age:34}

];
//operadores basicos

//suma resta multiplicacion , division
var suma = number_one + number_two;
console.log("suma=" + suma);


var resta = number_one - number_two;
console.log("resta=" + resta);


var mul = number_one * number_two;
console.log("mult" + mul);

var div = number_one / number_two;
div=div.toFixed(2);
console.log("div=" + div);


var mod = number_one % number_two;
console.log("modulo=" + mod);

console.log(
    "suma=" + suma +
"resta=" + resta +
"mult" + mul +
"div=" + div +
"modulo=" + mod
)

var respuesta ="suma=" + suma +"resta=" + resta +"mult" + mul + "div=" + div +"modulo=" + mod;

Swal.fire({
    icon:'success',
    title:'resultados',
    html:respuesta,
    background:'#fff'

});