const messageMap = new WeakMap();

export function initError(input, saveButton) {
    if (messageMap.has(input)) return;

    const form = input.closest('form');
    let errorContainer = form ? form.querySelector('.error-row') : null;

    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.className = 'error-row';
        saveButton.insertAdjacentElement('afterend', errorContainer);
    }

    let errorMessage = errorContainer.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'La tarea es obligatoria';
        errorContainer.appendChild(errorMessage);
    }

    messageMap.set(input, errorMessage);
}

export function showError(input) {
    const errorMessage = messageMap.get(input);
    input.classList.add('error');
    if (errorMessage) errorMessage.classList.add('visible');
}

export function clearError(input) {
    const errorMessage = messageMap.get(input);
    input.classList.remove('error');
    if (errorMessage) errorMessage.classList.remove('visible');
}
