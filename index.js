const firstName = prompt("Напишіть своє ім'я");
const lastName = prompt("А тепер прізвище");
const checkMessage = Boolean(firstName) == true && Boolean(lastName) == true;
console.log(checkMessage);

if (checkMessage == true) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

const firstNumber = prompt('Ведіть перше число');
const secondNumber = prompt('Ведіть друге число');

const fullNumber = Number(firstNumber) + Number(secondNumber);

console.log(fullNumber)

if (fullNumber > 10) {
    alert("Сума більша за 10");
} else {
    alert("Сума менша або дорівнює 10");
}

const message = prompt("Ведіть текс з словом JavaScript");
const newCheckMessage = message.indexOf("JavaScript");
console.log(newCheckMessage);

if (newCheckMessage) {
  alert("Текст не містить слово JavaScript");
} else {
  alert("Текст містить слово JavaScript");
}

const range = prompt("Ведіть число від 10 до 20");
const rangeCheck = range >= 10 && range <= 20;

console.log(rangeCheck)

if (rangeCheck) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}
