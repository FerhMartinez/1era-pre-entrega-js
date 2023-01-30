let hour = prompt("Ingrese su edad");
alert("¿Te gustaria aprender programacion?");
confirm("¿Estas seguro?")
let greeting;

console.log("variable" + hour)


if (hour > 0) {
    greeting = "Genial, CoderHouse tiene todo lo que necesitas 😎"
    alert(greeting)

    greeting = "No hay limites de edad para programar✌";
    alert(greeting)
}



//bucle
let count = 10;
let max = 30;
while (count < max) {
    alert(count)
    count = count + 1
}