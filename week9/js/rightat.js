// Right Angle Triangle
const startItems = document.getElementById('startItems');
const triangle = document.getElementById('triangle');
const triangleNumber = document.getElementById('patternNumber');

function printPattern(n) {
  if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive number");
    return;
  }

  startItems.innerHTML = '';

  for (let i = 1; i <= n; i++) {
    let stars = '';
    const li = document.createElement('li');

    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
    li.innerHTML = stars;
    startItems.appendChild(li);
  }
}

triangle.addEventListener('click', () => {
  const realNumber = parseInt(triangleNumber.value.trim(), 10);
  printPattern(realNumber);
});
