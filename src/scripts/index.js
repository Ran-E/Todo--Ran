const lists = document.querySelector(".main");
const enterlist = document.querySelector(".new-todo");
const inputlist = document.querySelector("input");
const div_level = document.querySelector(".view");
const old_dif_list = document.querySelector("label");
old_dif_list.remove();

const countlist = document.querySelector("strong");

console.log(enterlist);

let state = {
  start: false,
};

function render() {
  if (state.start) {
    lists.style.display = "block";
  } else {
    lists.style.display = "none";
  }
}

function listtemp() {
  newlist = document.createElement("label");
  newlist.innerText = enterlist.value;

  div_level.appendChild(newlist);
}

function addnote() {
  state.start = true;
  listtemp();
  enterlist.value = "";
  countlist.innerHTML = Number(countlist.textContent) + 1;
  render();
}

enterlist.addEventListener("keypress", function (event) {
  if (enterlist.value !== "" && event.key === "Enter") {
    addnote();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  render(state);
});
