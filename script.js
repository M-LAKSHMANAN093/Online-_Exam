const avatar = document.getElementById("avatar");
const username = document.getElementById("username");
const password = document.getElementById("password");

const imgSleep = "babyimage3.png";
const imgOpen = "babyimage2.png";
const imgCover = "babyimage.jpg";

// Show login page after splash
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    const loginPage = document.getElementById("loginPage");
    loginPage.classList.remove("hidden");
    loginPage.classList.add("show");
  }, 2500); // delay in ms
});

// Avatar change logic
username.addEventListener("focus", () => {
  avatar.src = imgOpen;
});

password.addEventListener("focus", () => {
  avatar.src = imgCover;
});

username.addEventListener("blur", () => {
  if (!password.matches(":focus")) {
    avatar.src = imgSleep;
  }
});

password.addEventListener("blur", () => {
  if (!username.matches(":focus")) {
    avatar.src = imgSleep;
  }
});
