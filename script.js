// Save and retrieve name using localStorage
document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("usernameInput").value.trim();
  if (name) {
    localStorage.setItem("preferredName", name);
    updateUsernameDisplay(name);
    alert("Your name has been saved! 🎉");
  }
});

function updateUsernameDisplay(name) {
  document.getElementById("usernameDisplay").textContent = name;
}

// Load saved name on page load
window.addEventListener("DOMContentLoaded", () => {
  const storedName = localStorage.getItem("preferredName");
  if (storedName) {
    updateUsernameDisplay(storedName);
  }
});

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");
  box.classList.remove("animate"); // reset
  void box.offsetWidth;            // reflow
  box.classList.add("animate");    // trigger
});
