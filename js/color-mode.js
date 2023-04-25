/* Toggle Color Mode */

let icon = document.getElementById('color-mode-icon');
let background = document.querySelector('body');

function darkMode() {
  background.classList.add('dark');
}

function lightMode() {
  background.classList.remove('dark');
}

let colorMode = 'light';

// toggle between color modes
function toggleColorMode() {
  if (colorMode === 'dark') {
    lightMode();
    colorMode = 'light';
  } else {
    darkMode();
    colorMode = 'dark';
  }
}

icon.addEventListener('click', toggleColorMode);