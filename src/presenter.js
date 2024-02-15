import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const idioma_input = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value;
  const genero = genero_input.value;
  const idioma = idioma_input.value;
  
  if(idioma==='Esp')
  {
    if (edad>=30) {
      if(genero==='M')
      {
        div.innerHTML = "<p> Hola senor " + saludar(nombre) + "</p>";
      }
      else if(genero==="F")
      {
        div.innerHTML = "<p> Hola senora " + saludar(nombre) + "</p>";
      }
      
    }  
    else {
      div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";
    } 
  }
  else if(idioma==='Eng')
  {
    if (edad>=30) {
      if(genero==='M')
      {
        div.innerHTML = "<p> Hello mister " + saludar(nombre) + "</p>";
      }
      else if(genero==="F")
      {
        div.innerHTML = "<p> Hello miss " + saludar(nombre) + "</p>";
      }
      
    }  
    else {
      div.innerHTML = "<p> Hello " + saludar(nombre) + "</p>";
    }

  }
  
  
  
});



