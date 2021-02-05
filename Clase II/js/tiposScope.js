console.log("Conexion exitosa");
var nombreUserVar = "Variable Global";
/* scope=>bloque */
/* ya el tipo de variable var 
no se usa por unas vainas que no entendi */
function condicional() {
  let edad = 17;
  let nombreUser = "User 1";
  console.log("Age user" + edad);
  /* Segundo bloque local */
  if (edad >= 18) {
    let nombreUser = "User 2";
    console.log(nombreUser + "Mayor de edad");
  } else {
    let nombreUser = "User 3";
    console.log(nombreUser + "Menor de edad");
  }
  console.log("La edad del usuario " + nombreUser + "no se consulto");
}

function condicionalSinLet() {
  edad = 17;
  nombreUserVar = "User 1";
  console.log("Age user" + edad);
  /* Segundo bloque local */
  if (edad >= 18) {
    nombreUserVar = "User 2";
    console.log(nombreUserVar + "Mayor de edad");
  } else {
    nombreUserVar = "User 3";
    console.log(nombreUserVar + "Menor de edad");
  }
  console.log("La edad del usuario " + nombreUserVar + "no se consulto");
}

function condicionalVar() {
  var edad = 17;
  var nombreUserVar = "Variable Global";
  console.log(nombreUserVar);
  /* Segundo bloque local */
  if (edad >= 18) {
    var nombreUserVar = "User 2";
    console.log(nombreUserVar + "Mayor de edad");
  } else {
    var nombreUserVar = "User 3";
    console.log(nombreUserVar + "Menor de edad");
  }
  console.log("La edad del usuario " + nombreUserVar + "no se consulto");
}

function condicionalSinVar() {
  var edad = 17;
  var nombreUserVar = "Variable Global";
  console.log(nombreUserVar);
  /* Segundo bloque local */
  if (edad >= 18) {
    nombreUserVar = "User 2";
    console.log(nombreUserVar + "Mayor de edad");
  } else {
    nombreUserVar = "User 3";
    console.log(nombreUserVar + "Menor de edad");
  }
  console.log("La edad del usuario " + nombreUserVar + "no se consulto");
}

function condicionalVarLet() {
  var edad = 17;
  var nombreUserVar = "Variable Global";
  console.log(nombreUserVar);
  /* Segundo bloque local */
  if (edad >= 18) {
    let nombreUserVar = "User 2";
    console.log(nombreUserVar + "Mayor de edad");
  } else {
    let nombreUserVar = "User 3";
    console.log(nombreUserVar + "Menor de edad");
  }
  console.log("La edad del usuario " + nombreUserVar + "no se consulto");
}
