const login = document.getElementById("l_derecho");
const registro = document.getElementById("l_izquierdo");
const textoPrincipal = document.getElementById("bienvenida");
const btnLogin = document.getElementById("boton");
const btnRegistro = document.getElementById("registro");
const btnLogin2 = document.getElementById("boton2");

function AparecerLogin(login, textoPrincipal) {
  login.style.display = "block";
  registro.style.display = "none";
  bienvenida.style.display = "none";
}

function AparecerRegistro(registro, textoPrincipal) {
  login.style.display = "none";
  registro.style.display = "block";
  bienvenida.style.display = "none";
}

btnLogin.addEventListener("click", function () {
  AparecerLogin(login, textoPrincipal);
});

btnRegistro.addEventListener("click", function () {
  AparecerRegistro(registro, textoPrincipal);
});

btnLogin2.addEventListener("click", function () {
  AparecerLogin(login, textoPrincipal);
});
