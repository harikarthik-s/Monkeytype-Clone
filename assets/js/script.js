const toggleModeInput = document.getElementById("light-mode-toggle");
const logoImage = document.getElementById("logo");

toggleModeInput.addEventListener("click", (e) => {
  if (!document.body.classList.contains("light-mode")) {
    document.body.classList.add("light-mode");
    localStorage.setItem("lightMode", true);
    logoImage.src = "assets/img/logo-light-mode.svg";
    document.querySelector("#theme-text").innerText = "serika";
  } else {
    document.body.classList.remove("light-mode");
    localStorage.setItem("lightMode", false);
    logoImage.src = "assets/img/logo.svg";
    document.querySelector("#theme-text").innerText = "serika dark";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const lightMode = JSON.parse(localStorage.getItem("lightMode"));

  if (!lightMode) {
    localStorage.setItem("lightMode", false);
    logoImage.src = "assets/img/logo.svg";
  } else {
    document.body.classList.add("light-mode");
    toggleModeInput.checked = true;
    logoImage.src = "assets/img/logo-light-mode.svg";
  }
});
