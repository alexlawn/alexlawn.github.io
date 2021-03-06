// Button selection
const buttonLight = document.getElementById("light");
const buttonDark = document.getElementById("dark");

// Style selection
const lightStyle = "styles-light.css";
const darkStyle = "styles-dark.css";

// Select the stylesheet <link>
const theme = document.getElementById("theme");

function lightFunction() {
  theme.href = lightStyle;
  // different sun for dark/light themes
  document.getElementById("light").src="sun - light.png";
  document.querySelector(".favicon").href = "favicon-light.ico";
  window.localStorage.setItem('theme', 'light');
}

function darkFunction() {
  theme.href = darkStyle;
  // different sun for dark/light themes
  document.getElementById("light").src="sun.jpg";
  document.querySelector(".favicon").href = "favicon-dark.ico";
  window.localStorage.setItem('theme', 'dark');
}

// Listen for a click on the sun picture (buttonLight)
buttonLight.addEventListener("click", lightFunction);

// Listen for a click on the moon picture (buttonDark)
buttonDark.addEventListener("click", darkFunction);

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  darkFunction();
} else {
  lightFunction();
}
