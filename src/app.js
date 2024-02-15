/* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    let excuseText = generadorexcusa();
    document.querySelector("#excuse").innerHTML = excuseText;

    // Cambia el color del texto
    let randomColor = getRandomColor();
    document.querySelector("#excuse").style.color = randomColor;
  });

  console.log("consola ");
};

let generadorexcusa = function() {
  let pronoun = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
  let action = ["se comió", "orinó", "aplastó", "rompió"];
  let what = ["mi tarea", "las llaves", "el auto"];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras rezaba"
  ];
  let emojis = ["😩", "🙈", "😞", "😭", "🥶", "😖"];

  let indexpronoun = Math.floor(Math.random() * pronoun.length);
  let indexaction = Math.floor(Math.random() * action.length);
  let indexwhat = Math.floor(Math.random() * what.length);
  let indexwhen = Math.floor(Math.random() * when.length);
  let indexemojis = Math.floor(Math.random() * emojis.length);

  return (
    pronoun[indexpronoun] +
    " " +
    action[indexaction] +
    " " +
    what[indexwhat] +
    " " +
    when[indexwhen] +
    " " +
    emojis[indexemojis]
  );
};

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
