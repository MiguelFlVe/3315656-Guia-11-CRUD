import { dom } from "./appContext.js";

// Generación de una fila en la tabla de tareas
export const createTaskRow = (task) => {
    const row = document.createElement("tr");
    row.setAttribute("data-task-id", task.id);
    row.task = task;

    const nameCell = document.createElement("td");
    nameCell.textContent = task.title;
    row.appendChild(nameCell);

    const statusCell = document.createElement("td");
    const statusButton = document.createElement("button");
    statusButton.type = "button";
    statusButton.textContent = task.completed ? "Completada" : "En progreso";
    statusButton.className = "status-button";
    statusCell.appendChild(statusButton);
    row.appendChild(statusCell);

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete-button";
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    return row;
}

// Renderización de la tabla de tareas
export const renderTaskTable = (tasks) => {
    dom.taskTableBody.innerHTML = "";
    if (tasks.length === 0) {
        dom.emptyStateRow.style.display = "table-row";
        dom.taskTableBody.appendChild(dom.emptyStateRow);
    } else {
        dom.emptyStateRow.style.display = "none";
        tasks.forEach(task => {
            const taskRow = createTaskRow(task);
            dom.taskTableBody.appendChild(taskRow);
        });
    }
}

