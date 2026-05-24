import { dom } from "./appContext.js";

import {
    updateTask,
    deleteTask
} from "./data.js";

// Generación de una fila en la tabla de tareas
export const createTaskRow = (task) => {
    const row = document.createElement("tr");
    row.setAttribute("data-task-id", task.id);

    const nameCell = document.createElement("td");
    nameCell.textContent = task.title;
    row.appendChild(nameCell);

    const statusCell = document.createElement("td");
    const statusButton = document.createElement("button");
    statusButton.type = "button";
    statusButton.textContent = task.completed ? "Completada" : "En progreso";
    statusButton.addEventListener("click", async () => {
        const message = task.completed
            ? "¿Marcar esta tarea como \"En progreso\"?"
            : "¿Marcar esta tarea como \"Completada\"?";

        if (!window.confirm(message)) {
            return;
        }

        const updatedTask = await updateTask(task.id, {
            ...task,
            completed: !task.completed
        });
        if (updatedTask) {
            task.completed = updatedTask.completed;
            statusButton.textContent = task.completed ? "Completada" : "En progreso";
        }
    });
    statusCell.appendChild(statusButton);
    row.appendChild(statusCell);

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", async () => {
        if (!window.confirm("¿Eliminar esta tarea?")) {
            return;
        }

        const deleted = await deleteTask(task.id);
        if (deleted) {
            row.remove();
            if (dom.taskTableBody.children.length === 0) {
                dom.taskTableBody.appendChild(dom.emptyStateRow);
                dom.emptyStateRow.style.display = "table-row";
            }
        }
    });
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

