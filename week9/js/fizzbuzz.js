
// FizzBuzz
const fButton = document.getElementById('fizzResult')

function fizzBuzz() {
  const outputDiv = document.getElementById('output');
  let result = '';

  for (let i = 1; i <= 20; i++) {
    // Check if divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz<br>';
    }
    // Check if divisible by 3
    else if (i % 3 === 0) {
      result += 'Fizz<br>';
    }
    // Check if divisible by 5
    else if (i % 5 === 0) {
      result += 'Buzz<br>';
    }
    // Otherwise print the number itself
    else {
      result += `${i}<br>`;
    }
  }

  outputDiv.innerHTML = result;
}

// Call the fizzBuzz function
fButton.addEventListener('click', fizzBuzz)


