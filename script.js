const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function adicionarTarefa() {
    const texto = taskInput.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addButton.addEventListener("click", adicionarTarefa);

taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});