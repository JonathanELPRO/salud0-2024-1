function saludar(nombre) {
  return nombre;
}
function retornarGeneroIdioma(genero,idioma,edad) {
  if(idioma=="Esp")
  {
    if (genero=="M")
    {
      if(edad>=30)
      {
        return " señor "
      }
      else if(edad<30)
      {
        return ""
      }
    }
    else if(genero=="F")
    {
      if(edad>=30)
      {
        return " señora "
      }
      else if(edad<30)
      {
        return ""
      }
    }

  }
  else if(idioma=="Eng")
  {
    if (genero=="M")
    {
      if(edad>=30)
      {
        return " mister "
      }
      else if(edad<30)
      {
        return ""
      }
    }
    else if(genero=="F")
    {
      if(edad>=30)
      {
        return " miss "
      }
      else if(edad<30)
      {
        return ""
      }
    }
  }
}
function retornarSaludoAcordeHoraIdioma(soloHora,idioma)
{
  if ((soloHora >= 18 && soloHora <=23) )
  {
    if (idioma=="Esp")
    {
      return "Buenas noches "

    }
    else if(idioma=="Eng")
    {
      return "Good evening "
    }
  }
  else if (soloHora >= 0 && soloHora <=11) 
  {
    if (idioma=="Esp")
    {
      return "Buenos dias "

    }
    else if(idioma=="Eng")
    {
      return "Good morning "
    }
  }
  else if (soloHora >= 12 && soloHora <= 17)
  {
    if (idioma=="Esp")
    {
      return "Buenas tardes "

    }
    else if(idioma=="Eng")
    {
      return "Good afternoon "
    }
  }


}


export default {saludar,retornarGeneroIdioma,retornarSaludoAcordeHoraIdioma};

// function saludoInicial(edad,genero,idioma,soloHora){
//   if ((soloHora >= 18 && soloHora <=23) ) {
//     if (idioma === 'Esp') {
//       if (edad >= 30) {
//         if (genero === 'M') {
//           div.innerHTML = "<p> Buenas noches senor " + saludar(nombre) + "</p>";
//         } else if (genero === "F") {
//           div.innerHTML = "<p> Buenas noches senora " + saludar(nombre) + "</p>";
//         }
//       } else {
//         div.innerHTML = "<p> Buenas noches " + saludar(nombre) + "</p>";
//       }
//     } else if (idioma === 'Eng') {
//       if (edad >= 30) {
//         if (genero === 'M') {
//           div.innerHTML = "<p> Good evening mister " + saludar(nombre) + "</p>";
//         } else if (genero === "F") {
//           div.innerHTML = "<p> Good evening miss " + saludar(nombre) + "</p>";
//         }
//       } else {
//         div.innerHTML = "<p> Good evening " + saludar(nombre) + "</p>";
//       }
//     }
//   } else if (soloHora >= 0 && soloHora <=11) {
//     if (idioma === 'Esp') {
//       if (edad >= 30) {
//         if (genero === 'M') {
//           div.innerHTML = "<p> Buenos dias senor " + saludar(nombre) + "</p>";
//         } else if (genero === "F") {
//           div.innerHTML = "<p> Buenos dias senora " + saludar(nombre) + "</p>";
//         }
//       } else {
//         div.innerHTML = "<p> Buenos dias " + saludar(nombre) + "</p>";
//       }
//     } else if (idioma === 'Eng') {
//       if (edad >= 30) {
//         if (genero === 'M') {
//           div.innerHTML = "<p> Good morning mister " + saludar(nombre) + "</p>";
//         } else if (genero === "F") {
//           div.innerHTML = "<p> Good morning miss " + saludar(nombre) + "</p>";
//         }
//       } else {
//         div.innerHTML = "<p> Good morning " + saludar(nombre) + "</p>";
//       }
//     }
//   } else if (soloHora >= 12 && soloHora <= 17) {
//     if (idioma === 'Esp') {
//       if (edad >= 30) {
//         if (genero === 'M') {
//           div.innerHTML = "<p> Buenas tardes senor " + saludar(nombre) + "</p>";
//         } else if (genero === "F") {
//           div.innerHTML = "<p> Buenas tardes senora " + saludar(nombre) + "</p>";
//         }
//       } else {
//         div.innerHTML = "<p> Buenas tardes " + saludar(nombre) + "</p>";
//       }
//     } else if (idioma === 'Eng') {
//       if (edad >= 30) {
//         if (genero === 'M') {
//           div.innerHTML = "<p> Good afternoon mister " + saludar(nombre) + "</p>";
//         } else if (genero === "F") {
//           div.innerHTML = "<p> Good afternoon miss " + saludar(nombre) + "</p>";
//         }
//       } else {
//         div.innerHTML = "<p> Good afternoon " + saludar(nombre) + "</p>";
//       }
//     }
//   }
// }