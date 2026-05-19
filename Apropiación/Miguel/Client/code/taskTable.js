// Generación de una fila en la tabla de tareas
export const createTaskRow = (task) => {
    const row = document.createElement("tr");
    row.setAttribute("data-task-id", task.id);

    const nameCell = document.createElement("td");
    nameCell.textContent = task.title;
    row.appendChild(nameCell);

    const statusCell = document.createElement("td");
    const statusCheckbox = document.createElement("input");
    statusCheckbox.type = "checkbox";
    statusCheckbox.checked = task.completed;
    statusCell.appendChild(statusCheckbox);
    row.appendChild(statusCell);

    return row;
}

// Renderización de la tabla de tareas
export const renderTaskTable = (tasks) => {
    dom.taskTableBody.innerHTML = "";
    if (tasks.length === 0) {
        dom.emptyStateRow.style.display = "table-row";
    } else {
        dom.emptyStateRow.style.display = "none";
        tasks.forEach(task => {
            const taskRow = createTaskRow(task);
            dom.taskTableBody.appendChild(taskRow);
        });
    }
}

