import {
    dom,
    initializeTaskTable,
    handleSaveTask,
    handleStatusChange,
    handleDeleteTask,
    fetchTasks,
    initError,
    showError,
    clearError
} from "./index.js";

// Ejecutar los handlers cuando se carga la página
document.addEventListener("DOMContentLoaded", async () => {
    // Cargar tareas desde el servidor
    const tasks = await fetchTasks();
    // Inicializar la tabla de tareas con los datos del servidor
    initializeTaskTable(tasks);

    // Inicializar sistema de errores y helpers
    initError(dom.taskInput, dom.saveButton);

    // Validación y guardado centralizados
    const handleFormSubmit = async () => {
        const raw = dom.taskInput.value;
        const taskTitle = raw.trim();
        if (taskTitle) {
            clearError(dom.taskInput);
            await handleSaveTask(taskTitle);
            dom.taskInput.value = "";
        } else {
            showError(dom.taskInput);
            dom.taskInput.focus();
        }
    };

    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        await handleFormSubmit();
    });

    dom.saveButton.addEventListener("click", handleFormSubmit);

    // Limpiar estado de error mientras el usuario escribe
    dom.taskInput.addEventListener('input', () => {
        if (dom.taskInput.value.trim().length > 0) clearError(dom.taskInput);
    });

    dom.taskInput.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            await handleFormSubmit();
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