function makeFriendsList(friends) {
  let listName = friends.map(item => item.firstName + " " + item.lastName);
  let ul = document.createElement("ul");
  for (let i = 0; i < listName.length; i++) {
    let li = document.createElement("li");
    li.textContent = listName[i];
    ul.appendChild(li);
  }
  return ul;
}

