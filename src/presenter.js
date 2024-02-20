import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const idioma_input = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
// const div3 = document.querySelector("#resultado-div3");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value;
  const genero = genero_input.value;
  const idioma = idioma_input.value;
  console.log(genero)
  // let fechaHoraActual = new Date();
  // let opciones = { hour: '2-digit', minute: '2-digit', hour12: false };
  // let soloHoraS = fechaHoraActual.toLocaleTimeString(undefined, opciones).split(":")[0];
  // let soloHora = parseInt(soloHoraS);
  let fechaActual = new Date();
  let soloHora = fechaActual.getHours();
  console.log(soloHora)
  if ((soloHora >= 18 && soloHora <=23) ) {
    if (idioma === 'Esp') {
      if (edad >= 30) {
        if (genero === 'M') {
          div.innerHTML = "<p> Buenas noches senor " + saludar(nombre) + "</p>";
        } else if (genero === "F") {
          div.innerHTML = "<p> Buenas noches senora " + saludar(nombre) + "</p>";
        }
      } else {
        div.innerHTML = "<p> Buenas noches " + saludar(nombre) + "</p>";
      }
    } else if (idioma === 'Eng') {
      if (edad >= 30) {
        if (genero === 'M') {
          div.innerHTML = "<p> Good evening mister " + saludar(nombre) + "</p>";
        } else if (genero === "F") {
          div.innerHTML = "<p> Good evening miss " + saludar(nombre) + "</p>";
        }
      } else {
        div.innerHTML = "<p> Good evening " + saludar(nombre) + "</p>";
      }
    }
  } else if (soloHora >= 0 && soloHora <=11) {
    if (idioma === 'Esp') {
      if (edad >= 30) {
        if (genero === 'M') {
          div.innerHTML = "<p> Buenos dias senor " + saludar(nombre) + "</p>";
        } else if (genero === "F") {
          div.innerHTML = "<p> Buenos dias senora " + saludar(nombre) + "</p>";
        }
      } else {
        div.innerHTML = "<p> Buenos dias " + saludar(nombre) + "</p>";
      }
    } else if (idioma === 'Eng') {
      if (edad >= 30) {
        if (genero === 'M') {
          div.innerHTML = "<p> Good morning mister " + saludar(nombre) + "</p>";
        } else if (genero === "F") {
          div.innerHTML = "<p> Good morning miss " + saludar(nombre) + "</p>";
        }
      } else {
        div.innerHTML = "<p> Good morning " + saludar(nombre) + "</p>";
      }
    }
  } else if (soloHora >= 12 && soloHora <= 17) {
    if (idioma === 'Esp') {
      if (edad >= 30) {
        if (genero === 'M') {
          div.innerHTML = "<p> Buenas tardes senor " + saludar(nombre) + "</p>";
        } else if (genero === "F") {
          div.innerHTML = "<p> Buenas tardes senora " + saludar(nombre) + "</p>";
        }
      } else {
        div.innerHTML = "<p> Buenas tardes " + saludar(nombre) + "</p>";
      }
    } else if (idioma === 'Eng') {
      if (edad >= 30) {
        if (genero === 'M') {
          div.innerHTML = "<p> Good afternoon mister " + saludar(nombre) + "</p>";
        } else if (genero === "F") {
          div.innerHTML = "<p> Good afternoon miss " + saludar(nombre) + "</p>";
        }
      } else {
        div.innerHTML = "<p> Good afternoon " + saludar(nombre) + "</p>";
      }
    }
  }
  

  
  // div3.innerHTML = "<p>" + soloHora + "</p>";


  
  
  
});



