let todos = JSON.parse(localStorage.getItem("todos")); // pobranie elementów z storage (element form)
if (todos === null) {
  todos = [];
}

const comment = document.querySelector("#comment");
const form = document.querySelector("#todo-form");
const draftButton = document.querySelector("#draftButton");
const list = document.querySelector("#list");
const input = document.querySelector("#todo-input");

input.value = localStorage.getItem("draft");
console.log(input);

todos.forEach((todo) => {
  list.innerHTML += `<li ${todo.isChecked ? 'class="completed"' : ""}>
  <input type="checkbox" ${todo.isChecked ? "checked" : ""}>
  ${todo.name}
  <button type="button"> X </button>
  </li>`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value.length < 2) {
    comment.innerHTML = "Niepoprawna wartosc";
  } else {
    comment.innerHTML = "";

    // dodawanie elementu listy
    list.innerHTML += `<li>
    <input type="checkbox">
    ${input.value}
    <button type="button"> X </button>
    </li>`;

    localStorage.setItem(
      "todos",
      JSON.stringify([
        ...todos,
        {
          name: input.value,
          checked: false,
        },
      ])
    );
  }

  // czyszczenie pola formularza
  input.value = "";
});

list.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    // console.log(event.target); // konkretny klikniety checkbox
    const selectedInput = event.target;

    // na jego rodzicu (czyli li) manipuluje klasa completed, ktora w CSS zmienia styl wyswietlenia
    selectedInput.parentElement.classList.toggle("completed");
  }

  if (event.target.tagName === "BUTTON") {
    const selectedButton = event.target;
    selectedButton.parentElement.remove();
  }
});

draftButton.addEventListener("click", () => {
  localStorage.setItem("draft", input.value);
});
