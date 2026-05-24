import {
    IP,
    PORT
} from "./IP-Port.js";

export const API_URL = `http://${IP}:${PORT}/tasks`;

export const HEADERS = {
    "Content-Type": "application/json"
};

export const FALLBACK_TASKS = [];

export const dom = {
    taskInput: document.getElementById("taskInput"),
    saveButton: document.getElementById("saveButton"),
    taskTableBody: document.getElementById("taskTableBody"),
    emptyStateRow: document.getElementById("emptyState")
}