var valueA = parseInt(prompt("Please, type value A"));
var valueB = parseInt(prompt("Please, type value B"));
var valueC = parseInt(prompt("Please, type value C"));

function getDisc() {
  return Math.pow(valueB, 2) - 4 * valueA * valueC;
}

console.log(getDisc());
alert(getDisc());
