import {
    renderTaskTable,
    createTaskRow
} from "./taskTable.js";

import {
    createTask,
    updateTask,
    deleteTask
} from "./data.js";

import { dom } from "./appContext.js";

// Cuando se ingresa la tarea, se genera una fila en la tabla de tareas
export const handleTaskInput = (event) => {
    if (event.key === "Enter") {
        const taskTitle = event.target.value.trim();
        if (taskTitle) {
            const newTask = {
                title: taskTitle,
                completed: false
            };
            event.target.value = "";
            return newTask;
        }
    }
    return null;
}

// Se genera la tabla de tareas al cargar la página
export const initializeTaskTable = (tasks) => {
    renderTaskTable(tasks);
}

// Guardar una nueva tarea en el servidor y actualizar la tabla
export const handleSaveTask = async (taskTitle) => {
    if (taskTitle.trim()) {
        const newTask = await createTask(taskTitle);
        if (newTask) {
            // Agregar la nueva tarea al inicio de la tabla sin recargar
            const taskRow = createTaskRow(newTask);
            dom.emptyStateRow.style.display = "none";
            dom.taskTableBody.insertBefore(taskRow, dom.taskTableBody.firstChild);
            return newTask;
        }
    }
    return null;
}

export const handleStatusChange = async (task, statusButton) => {
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
};

export const handleDeleteTask = async (task, row) => {
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
};