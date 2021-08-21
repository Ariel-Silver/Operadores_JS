// Datos usados en prompt para operación matematica basica

const data1 = +prompt("Ingrese un número mayor a 0")
const data2 = +prompt("Ingrese otro número mayor a 0")

alert(`El resultado al sumar es : ${data1+data2}\nEl resultado al restar es : ${data1-data2}\nEl resultado al multiplicar es : ${data1*data2}\nEl resultado al dividir es : ${data1/data2}`)

// Función de Celcius a Kelvin y Fahrenheit
function convert(){
  if (c = document.getElementById("celsius_input").value);
  const k = (parseFloat(c) + 273.15);
  document.getElementById("kelvin").innerHTML = `${k}`;

  if (c = document.getElementById("celsius_input").value);
  const f = (parseFloat(c) * 9/5) + 32;
  document.getElementById("fahrenheit").innerHTML = `${f}`;
}


// Función días a años, semanas y días
function daysInYears (num) {
  let years, yearMod, weeks, days;

  years = Number.parseInt(num / 365);
  yearMod = Number.parseInt(num % 365);
  weeks = Number.parseInt(yearMod / 7);
  days = Number.parseInt(yearMod % 7);

  document.getElementById("days_output").innerHTML= `<br> años = ${years} <br> semanas = ${weeks} <br> días = ${days}`;
}

// Función para ingresar valores, sumarlos y promediarlos
function numbers()
 {
  const num1 = +(document.getElementById("form").elements["num1"].value);
  const num2 = +(document.getElementById("form").elements["num2"].value);
  const num3 = +(document.getElementById("form").elements["num3"].value);
  const num4 = +(document.getElementById("form").elements["num4"].value);
  const num5 = +(document.getElementById("form").elements["num5"].value);
  
  const total = num1 + num2 + num3 + num4 + num5;
  
  document.getElementById("suma").innerHTML = `La suma de tus números es : ${total}`;
  document.getElementById("promedio").innerHTML = `El promedio de tus números es : ${total / 5}`;
}


// Función toggler
function myFunction() {
     const x = document.getElementById("hide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
     }
   }

