import "./src/styles/index.scss";

const inputBox = document.querySelector(".app__container__input-box__input");
const addBtn = document.querySelector(".app__container__input-box__button");
const taskContainer = document.querySelector(
  ".app__container__task-section__list"
);

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.classList.add("app__container__task-section__list__item");
    taskContainer.appendChild(li);
    inputBox.value = "";
  }
}

addBtn.addEventListener("click", addTask);
