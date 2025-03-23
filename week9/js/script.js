// Select elements by ID and class
const evenOddResult = document.querySelector('.evenOddResult');
const resultButton = document.querySelector('.result');
const numberInput = document.getElementById('inputNumber');

function EvenOdd(n){
  evenOddResult.textContent = parsedNumber % 2 === 0 ? 'Even' : 'Odd';
}

// Event listener to check even/odd when button is clicked
resultButton.addEventListener('click', () => {
  const inputValue = numberInput.value.trim();
  const parsedNumber = parseInt(inputValue, 10);
  
  if (!isNaN(parsedNumber)) {
    EvenOdd(parsedNumber)
  } else {
    evenOddResult.textContent = 'Invalid input';
  }
}
);

// Multiplication table
const multiplication = document.getElementById('multiplication');
const multiplier = document.getElementById('multiplier');
const result = document.getElementById('result');
const inputNumber = document.getElementById('number');
const button = document.getElementById('generate');
const items = document.getElementById('items');
const error = document.getElementById('error');

function generateMultiplicationTable(number) {
  for (let i = 1; i <= number; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${number ? number : "1"}</td><td>x</td> <td>${i}</td><td>${number * i}</td>`;
    items.appendChild(row);
  }
}

button.addEventListener('click', () => {
  const number = parseInt(inputNumber.value.trim(), 10);
  if (!isNaN(number) && number > 0) {
    error.innerHTML = '';
    generateMultiplicationTable(number);
  } else {
    error.innerHTML = "Invalid Input data";
  }
});

