document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.getElementById("todoList");
  const todoInput = document.getElementById("todoInput");

  window.createTodo = function () {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const li = document.createElement("li");
      li.textContent = todoText;

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit-btn";
      editButton.onclick = function () {
        updateTodo(li, todoText);
      };

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.onclick = function () {
        deleteTodo(li);
      };

      li.appendChild(editButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);

      todoInput.value = "";
    }
  };

  function updateTodo(li, oldText) {
    const newText = prompt("Edit your todo", oldText);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.nodeValue = newText.trim();
    }
  }

  function deleteTodo(li) {
    todoList.removeChild(li);
  }
});
