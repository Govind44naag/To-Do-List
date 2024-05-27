document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", addTask);

    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    });

    function addTask() {
        if (inputBox.value.trim() === '') {
            alert("You must write something!");
        } else {
            let li = document.createElement("li");
            li.textContent = inputBox.value.trim();
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.textContent = "\u00d7";
            li.appendChild(span);
            inputBox.value = "";
            saveData();
        }
    }

    function saveData() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }

    function showTasks() {
        listContainer.innerHTML = localStorage.getItem("tasks") || '';
    }

    showTasks();
});
