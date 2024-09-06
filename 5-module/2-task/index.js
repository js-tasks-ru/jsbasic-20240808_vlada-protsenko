function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  btn.addEventListener ("click", function() {
    let item = document.querySelector("#text");
    item.hidden = !item.hidden;
  })
}
