function hideSelf() {
  document.addEventListener("click", function (event) {
    let elem = event.target.classList.contains("hide-self-button");
    if (!elem) return;
    let btn = document.querySelector(".hide-self-button");
    btn.hidden = true;
  });
  
  /*let btn = document.querySelector(".hide-self-button");
  btn.onclick = function () {
  btn.hidden = true;
  };*/
}
