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
    li.classList.add("app__container__task-section__list__item");

    let leftContent = document.createElement("div");
    leftContent.classList.add(
      "app__container__task-section__list__item__left-content"
    );

    let leftContentIcon = document.createElement("img");
    leftContentIcon.classList.add(
      "app__container__task-section__list__item__left-content__icon"
    );
    leftContentIcon.src = "/unchecked.svg";

    let leftContentText = document.createElement("span");
    leftContentText.classList.add(
      "app__container__task-section__list__item__left-content__text"
    );
    leftContentText.innerHTML = inputBox.value;

    let rightContentIcon = document.createElement("img");
    rightContentIcon.classList.add(
      "app__container__task-section__list__item__right-content-icon"
    );
    rightContentIcon.src = "/close.svg";

    leftContent.appendChild(leftContentIcon);
    leftContent.appendChild(leftContentText);
    li.appendChild(leftContent);
    li.appendChild(rightContentIcon);
    taskContainer.appendChild(li);
    inputBox.value = "";
  }
}

addBtn.addEventListener("click", addTask);
