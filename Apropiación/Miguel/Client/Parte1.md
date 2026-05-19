1. Qué método HTTP usarían para:
* **Crear una tarea:** POST
* **Listar tareas:** GET
* **Actualizar una tarea:** PUT (En caso de actualizar todos los datos del elemento) o UPDATE (En caso de actualizar el elemento de manera parcial)

2. ¿Qué información necesitarían eviar al servidor para actualizar o eliminar una tarea?
* **Rta:** En el caso de eliminar, se debería enviar un identificador único, con el fin de ubicar el elemento que se desea eliminar. En el caso de actuazliar, se debería enviar tanto el identificador, como la información de los campos a modificar.

3. ¿En qué momento debe actualizarse el DOM?
* **Rta:** El DOM debe modificarse luego de que el servidor ha recibido la petición de parte del cliente, así como regresado su respuesta, por medio de la cual se determina el tipo de cambio de debe realizarse en el DOM.