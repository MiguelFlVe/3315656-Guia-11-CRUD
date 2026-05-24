2. Listar tareas (READ)

* ¿En qué momento se transforman los datos JSON en elementos HTML?
**RTA:** En la función "createTaskRow(...)", donde los atributos de cada tarea son convertidos en parte del código html. El id de la tarea es convertido en el id de la fila de la tabla; el title, se convierte en el contenido de la celda de título; "completed", se convierte en el contenido del botón para actualizar el estado.

3. Crear tarea (CREATE)

* ¿Qué ocurre primero: se actualiza el DOM o se envía la solicitud al servidor?
**RTA:** Primero se envía la solicitud, se espera la respuesta del servidor y, dependiendo de la respuesta, se actualiza el DOM

4. Eliminar tarea (DELETE)

* ¿Por qué es importante el id en esta operación?
**RTA:** En caso de no utilizar el id, la petición DELETE eliminaría todas las tareas del db.json

5. Actualizar tarea (PUT/UPDATE)

* ¿Qué diferencia existe entre modificar un dato en el DOM y modificarlo en el servidor?
**RTA:** Al modificarlo en el servidor, se hace un cambio completo de la forma en que se trata dicho dato, incluso luego de recargar la página. En caso de solo modificarlo en el DOM, solo se modifica temporalmente, sin ningún cambio real en su tratamiento, hasta el momento en el que la página sea cargada nuevamente.