import { renderTaskTable } from "./taskTable.js";

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