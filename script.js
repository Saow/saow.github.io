// ... Your existing JavaScript code ...

let darkMode = false;

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'Enter') {
    event.preventDefault();
    toggleDarkMode();
  }
});

function toggleDarkMode() {
  const body = document.body;
  darkMode = !darkMode;
  if (darkMode) {
    body.classList.add('dark-mode'); // Apply dark mode styles
  } else {
    body.classList.remove('dark-mode'); // Remove dark mode styles
  }
}



// script.js
document.addEventListener("DOMContentLoaded", function() {
  const notification = document.getElementById("sticky-notification");
  const closeButton = document.getElementById("close-button");

  closeButton.addEventListener("click", function() {
      notification.style.display = "none";
  });

  notification.style.display = "block";
});
