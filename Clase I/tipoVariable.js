function tipoLet() {
  /* alt + shift + a */
  /* función que imprime por consola un saludo */
  let saludo = "Hola grupo MCDS desde l función";
  console.log(saludo);
  /* Se llama el id del tag <p id="verSalida"></> */
  /* lo siguiente envia ese texto a un párrafo del html */
  saludo = "Hasta el miércoles";
  /*document.getElementById("verSalida").innerHTML="Hola grupo MCDS"  */
  document.getElementById("verSalida").innerHTML = saludo;
}
function tipoConst() {
  const saludo = "Hola tipo constante";
  console.log(saludo);
  /* saludo = "Hasta el miércoles"; //esto sería un error porque es una reasignación de una constante */
  document.getElementById("verConst").innerHTML = saludo;
}

console.log("Hola grupo MCDS123");
