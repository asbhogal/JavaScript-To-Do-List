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
    const template = `
      <li class="app__container__task-section__list__item">
        <div class="app__container__task-section__list__item__left-content">
          <img class="app__container__task-section__list__item__left-content__icon" src="/unchecked.svg" />
          <span class="app__container__task-section__list__item__left-content__text">${inputBox.value}</span>
        </div>
        <img class="app__container__task-section__list__item__right-content-icon" src="/close.svg" />
      </li>
    `;

    taskContainer.insertAdjacentHTML("beforeend", template);
    inputBox.value = "";
  }
}

addBtn.addEventListener("click", addTask);

taskContainer.addEventListener("click", function (e) {
  if (
    e.target.classList.contains(
      "app__container__task-section__list__item__left-content__icon"
    )
  ) {
    const li = e.target.closest("li");
    const img = e.target;
    img.src = img.src.includes("/checked.svg")
      ? "/unchecked.svg"
      : "/checked.svg";
    li.classList.toggle("app__container__task-section__list__item__checked");
  }
});

inputBox.addEventListener("keyup", function (e) {
    (e.keyCode === 13) && (e.preventDefault(), addTask());
})
