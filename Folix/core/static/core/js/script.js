const login = document.getElementById("l_derecho");
const registro = document.getElementById("l_izquierdo");
const textoPrincipal = document.getElementById("bienvenida");
const btnLogin = document.getElementById("boton");
const btnRegistro = document.getElementById("registro");
const btnLogin2 = document.getElementById("boton2");

function AparecerLogin() {
  login.classList.add("scale-up-center");
  login.style.display = "block";
  registro.style.display = "none";
}

function AparecerRegistro() {
  registro.classList.add("scale-up-center");
  login.style.display = "none";
  registro.style.display = "block";
  bienvenida.style.display = "none";
}

function DesaparecerBienvenida() {
  textoPrincipal.classList.add("scale-down-blur-center");
  setTimeout(function () {
    bienvenida.style.display = "none";
  }, 360);
}

function DesaparecerRegistro() {
  registro.classList.add("scale-down-blur-center");
  setTimeout(function () {
    registro.style.display = "none";
  }, 360);
}

btnLogin.addEventListener("click", function () {
  DesaparecerBienvenida(textoPrincipal);
  AparecerLogin(login);
});

btnRegistro.addEventListener("click", function () {
  DesaparecerBienvenida(textoPrincipal);
  AparecerRegistro(registro);
});

btnLogin2.addEventListener("click", function () {
  DesaparecerBienvenida(textoPrincipal);
  AparecerLogin(login);
});
