//  Temperature Converter
function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

const f = celsiusToFahrenheit(30);
// console.log(f);

const c = fahrenheitToCelsius(86);
// console.log(c)

// Age Calculator
function calculateAge(birthYear, currentYear) {
  if (birthYear > currentYear) return "Invalid birthYear";
  return currentYear - birthYear;
}

function canVote(age) {
  if (age > 18) {
    return "Can vote";
  }

  return "Can't vote";
}

const age = calculateAge(2030, 2026);
console.log(age)
const eligible = canVote(age);
console.log(eligible);
