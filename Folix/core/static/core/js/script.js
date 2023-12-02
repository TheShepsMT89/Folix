const login = document.getElementById("l_derecho");
const registro = document.getElementById("l_izquierdo");
const textoPrincipal = document.getElementById("bienvenida");
const btnLogin = document.getElementById("boton");
const btnRegistro = document.getElementById("registro");
const btnLogin2 = document.getElementById("boton2");
const btnTemas = document.getElementById("btnTemas");
const sctTemas = document.getElementById("SeccionTemas");

// AbAellbesico //
const Registrarse = document.getElementById("registrarse");

// AbAellbesico //

function AparecerSeccionTemas() {
  sctTemas.classList.add("scale-up-center");
  sctTemas.style.display = "flex";
  textoPrincipal.style.display = "none";
  login.style.display = "none";
  registro.style.display = "none";
}

function AparecerLogin() {
  login.classList.add("scale-up-center");
  login.style.display = "block";
  registro.style.display = "none";
  bienvenida.style.display = "none";
  sctTemas.style.display = "none";
}

function AparecerRegistro() {
  registro.classList.add("scale-up-center");
  login.style.display = "none";
  registro.style.display = "block";
  bienvenida.style.display = "none";
  sctTemas.style.display = "none";
}

function DesaparecerBienvenida() {
  textoPrincipal.classList.add("scale-down-blur-center");
  setTimeout(function () {
    bienvenida.style.display = "none";
  }, 360);
  sctTemas.style.display = "none";
}

function DesaparecerRegistro() {
  registro.classList.add("scale-down-blur-center");
  setTimeout(function () {
    registro.style.display = "none";
  }, 360);
  sctTemas.style.display = "none";
}

btnLogin.addEventListener("click", function () {
  DesaparecerBienvenida(textoPrincipal);
  AparecerLogin(login);
});

btnRegistro.addEventListener("click", function () {
  DesaparecerBienvenida(textoPrincipal);
  AparecerRegistro(registro);
});

Registrarse.addEventListener("click", function () {
  DesaparecerBienvenida(textoPrincipal);
  DesaparecerRegistro(registro);
  AparecerLogin(login);
});

btnLogin2.addEventListener("click", function () {
  DesaparecerBienvenida(textoPrincipal);
  AparecerLogin(login);
});

btnTemas.addEventListener("click", function () {
  AparecerSeccionTemas();
});
