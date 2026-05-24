- **Acción del usuario:**
	- Escribir una tarea y presionar *Enter* o hacer clic en *Guardar*.
	- Hacer clic en el botón de *Estado* (Cambiar a "En progreso" / "Completada").
	- Hacer clic en el botón *Eliminar* para borrar una tarea.

- **Evento capturado en JavaScript:**
	- *script.js* escucha *DOMContentLoaded*, el *submit* del formulario y *keydown* (Enter) y delega *click* en *taskTableBody*.
	- Se ejecuta *preventDefault()* para evitar recarga y se llama al handler correspondiente (*handleSaveTask*, *handleStatusChange*, *handleDeleteTask*).

- **Solicitud HTTP enviada:**
	- Crear: *POST* con *{ title, completed }*.
	- Listar: *GET* para obtener el conjunto de tareas.
	- Actualizar estado: *PUT* con la tarea actualizada.
	- Eliminar: *DELETE* con el id específico de la tarea a eliminar.

- **Respuesta del servidor:**
	- *POST* / *PUT* devuelven JSON con la tarea creada/actualizada.
	- *GET* devuelve un array de las tareas existentes.
	- *DELETE* responde con confirmación; *data.js* procesa *response.json()* cuando aplica.

- **Actualización del DOM:**
	- Al crear: se genera una fila con *createTaskRow(task)* y se inserta al inicio del *tbody* (Esta fila se mueve al final de la tabla al recargar la página).
	- Al cambiar estado: se actualiza el texto/clase del botón de estado en la fila correspondiente.
	- Al eliminar: se remueve la fila del *tbody* y, si no quedan filas, se muestra el *emptyState*.

