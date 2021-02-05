/*console.log("Testing I");
console.table("Testing II");*/

function capturaValores() {
  const nombreUser = document.getElementById("user_name").value;
  const lastname1 = document.getElementById("last_name").value;
  const lastname2 = document.getElementById("last_name1").value;
  const age = document.getElementById("user_age").value;
  const emailuser = document.getElementById("user_email").value;
  document.getElementById(
    "s1"
  ).innerHTML = `Ha iniciado sesión  ${nombreUser} ${lastname1} ${lastname2} ${age} ${emailuser}`;
  document.getElementById("s2").innerHTML = "Ha iniciado sesión" + lastname1;
  document.getElementById("s3").innerHTML = "Ha iniciado sesión" + lastname2;
  document.getElementById("s4").innerHTML = "Edad del usuario" + age;
  document.getElementById("s5").innerHTML =
    "Ha recibido un correo de" + emailuser;
  console.log(nombreUser);
}
