function highlight(table) {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      cell.innerHTML == "m" ? row.classList.add("male") : row.classList.add("female");
      if (Number(cell.innerHTML) < 18) {
        row.style.textDecoration = "line-through";
      }
      if (cell.dataset.available) {
        cell.dataset.available == "true" ? row.classList.add("available") : row.classList.add("unavailable");
      } else {
        row.setAttribute("hidden", "");
      }
    }
  }
}
