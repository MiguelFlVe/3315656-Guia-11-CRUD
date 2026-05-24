import {
    dom,
    initializeTaskTable,
    handleSaveTask,
    handleStatusChange,
    handleDeleteTask,
    fetchTasks
} from "./index.js";

// Ejecutar los handlers cuando se carga la página
document.addEventListener("DOMContentLoaded", async () => {
    // Cargar tareas desde el servidor
    const tasks = await fetchTasks();
    // Inicializar la tabla de tareas con los datos del servidor
    initializeTaskTable(tasks);

    // Prevenir envío del formulario para evitar recarga
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => e.preventDefault());

    // Manejar clic en el botón Guardar
    dom.saveButton.addEventListener("click", async () => {
        const taskTitle = dom.taskInput.value.trim();
        if (taskTitle) {
            await handleSaveTask(taskTitle);
            dom.taskInput.value = "";
        }
    });

    // Permitir guardar con la tecla Enter
    dom.taskInput.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const taskTitle = dom.taskInput.value.trim();
            if (taskTitle) {
                await handleSaveTask(taskTitle);
                dom.taskInput.value = "";
            }
        }
    });

    // Delegación de eventos para botones de estado y eliminar
    dom.taskTableBody.addEventListener("click", async (e) => {
        const button = e.target.closest("button");
        if (!button) return;

        const row = button.closest("tr");
        if (!row || !row.task) return;

        if (button.classList.contains("status-button")) {
            await handleStatusChange(row.task, button);
        }

        if (button.classList.contains("delete-button")) {
            await handleDeleteTask(row.task, row);
        }
    });
});