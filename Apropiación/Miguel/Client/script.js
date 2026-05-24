import { FALLBACK_TASKS, dom } from "./code/appContext.js";
import { initializeTaskTable, handleTaskInput } from "./code/handler.js";
import { fetchTasks } from "./code/data.js";

// Ejecutar los handlers cuando se carga la página
document.addEventListener("DOMContentLoaded", async () => {
    // Cargar tareas desde el servidor
    const tasks = await fetchTasks();
    // Inicializar la tabla de tareas con los datos del servidor
    initializeTaskTable(tasks);

    // Agregar evento para manejar la entrada de tareas
    dom.taskInput.addEventListener("keydown", handleTaskInput);
});