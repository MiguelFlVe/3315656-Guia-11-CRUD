// Importar códigos de code
import {
    IP,
    PORT
} from "./code/IP-Port.js";

import {
    API_URL,
    HEADERS,
    FALLBACK_TASKS,
    dom
} from "./code/appContext.js";

import {
    handleTaskInput,
    initializeTaskTable,
    handleSaveTask
} from "./code/handler.js";

import { fetchTasks } from "./code/data.js";

export {
    IP,
    PORT,
    API_URL,
    HEADERS,
    FALLBACK_TASKS,
    dom,
    handleTaskInput,
    initializeTaskTable,
    handleSaveTask,
    fetchTasks
};