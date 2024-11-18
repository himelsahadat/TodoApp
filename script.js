const listItem = document.querySelector(".listItem");
const inputbox = document.getElementById("input-box");

function addList() {
  if (inputbox.value.trim() === '') {
    alert("You must filled with somethings");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listItem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = '';
  saveTodo();
}

listItem.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveTodo();
    } else if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveTodo();
    }
  },
  false
);

function saveTodo() {
  localStorage.setItem("data", listItem.innerHTML);
}
function showTodo() {
  listItem.innerHTML = localStorage.getItem("data");
}
showTodo();