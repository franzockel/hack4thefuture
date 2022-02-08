// FAQ Accordeon

const acc = document.getElementsByClassName("question");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginTop = "0";
      acc[i].getElementsByTagName("h3")[1].innerText = "+";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginTop = "16px";
      acc[i].getElementsByTagName("h3")[1].innerText = "-";
    }
  });
}

// Menu Overlay

let nav = false;

document.querySelectorAll("#menu a").forEach((item) => {
  item.addEventListener("click", closeMenu);
});

document.querySelector("#menuButton").addEventListener("click", toggleMenu);

function openMenu() {
  document.getElementById("menu").style.left = "0";
  document.querySelector("#menuButton").classList.remove("closed");
  document.querySelector("#menuButton").classList.add("opened");
  nav = true;
}

function closeMenu() {
  document.getElementById("menu").style.left = "100vw";
  document.querySelector("#menuButton").classList.remove("opened");
  document.querySelector("#menuButton").classList.add("closed");
  nav = false;
}

function toggleMenu() {
  nav ? closeMenu() : openMenu();
}
