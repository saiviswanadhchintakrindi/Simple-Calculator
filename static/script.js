function vibrate(duration = 40) {
  if (navigator.vibrate) navigator.vibrate(duration);
}

function append(char) {
  vibrate();
  document.getElementById('display').value += char;
}

function clearDisplay() {
  vibrate();
  document.getElementById('display').value = '';
}

function deleteChar() {
  vibrate();
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}


function calculate() {
  vibrate();
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Theme toggle logic
const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('light-theme', toggle.checked);
  localStorage.setItem('theme', toggle.checked ? 'light' : 'dark');
});

// Load saved theme
window.onload = () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    toggle.checked = true;
    body.classList.add('light-theme');
  }
};
const historyList = document.getElementById('history-list');
const historySection = document.getElementById('history-section');
let history = [];

function updateHistory(expression, result) {
  if (history.length === 5) history.shift(); // Keep last 5 results

  // Save the full calculation (expression and result)
  history.push(`${expression} = ${result}`);
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';  // Clear current list

  history.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    historyList.appendChild(listItem);
  });
}

function toggleHistory() {
  // Toggle visibility of history section
  if (historySection.style.display === 'none') {
    historySection.style.display = 'block';
  } else {
    historySection.style.display = 'none';
  }
}

function append(char) {
  document.getElementById('display').value += char;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteChar() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    // Update history with full expression and result
    updateHistory(display.value, result);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
