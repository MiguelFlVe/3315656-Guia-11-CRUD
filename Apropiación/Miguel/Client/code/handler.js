import {
    renderTaskTable,
    createTaskRow
} from "./taskTable.js";

import { createTask } from "./data.js";

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