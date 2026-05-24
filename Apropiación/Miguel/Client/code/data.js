import {
    API_URL,
    HEADERS,
    FALLBACK_TASKS,
    dom
} from "./appContext.js";

// Lectura de tareas desde el servidor
export const fetchTasks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error al obtener tareas: ${response.statusText}`);
        }
        const data = await response.json();
        // Si la respuesta es un objeto con propiedad 'tasks', retornar ese array
        return Array.isArray(data) ? data : (data.tasks || FALLBACK_TASKS);
    } catch (error) {
        console.error(error);
        return FALLBACK_TASKS;
    }
}

// Creación de una nueva tarea en el servidor
export const createTask = async (taskName) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({
                title: taskName,
                completed: false
            })
        });
        if (!response.ok) {
            throw new Error(`Error al crear tarea: ${response.statusText}`);
        }
        const newTask = await response.json();
        return newTask;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Actualización de una tarea existente en el servidor
export const updateTask = async (taskId, updatedData) => {
    try {
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: "PUT",
            headers: HEADERS,
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error(`Error al actualizar tarea: ${response.statusText}`);
        }
        const updatedTask = await response.json();
        return updatedTask;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Eliminación de una tarea en el servidor
export const deleteTask = async (taskId) => {
    try {
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error(`Error al eliminar tarea: ${response.statusText}`);
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}