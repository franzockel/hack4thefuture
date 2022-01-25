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
