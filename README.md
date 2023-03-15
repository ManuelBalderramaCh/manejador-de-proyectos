
# Diagrama de clases

En este diagrama de clases, las clases **proyecto** y **Miembro** representan los expedientes de proyectos y los miembros del equipo de desarrollo, respectivamente y por supuesto, con sus respectivos atributos y que a su vez, tienen una asociación de tipo composición. La clase **Habilidad** representa la clasificación de habilidades como *junior*, *senior* o *master*.

La clase **RedSocial** representa las posibles redes sociales que el usuario puede utilizar para su inicio de sesión, mientras que la clase **Roles**  representan los roles que pueden ser asignados a cada usuario dentro de un proyecto.

En resumen, este diagrama de clases muestra cómo las diferentes clases están relacionadas entre sí para satisfacer los requisitos dados.

[![Diagrama de clases](https://raw.githubusercontent.com/miguel-cortinas/flappy/main/diagrama%20de%20clases.jpg?token=GHSAT0AAAAAAB7LJ2EP53JECQ7CJVP4DODYZASH7UA "Diagrama de clases")](https://raw.githubusercontent.com/miguel-cortinas/flappy/main/diagrama%20de%20clases.jpg?token=GHSAT0AAAAAAB7LJ2EP53JECQ7CJVP4DODYZASH7UA "Diagrama de clases")


# Diagrama de interacción

El proposito de este diagrama de interacción es definir y representar el funcionamiento de un sistema, especialmente en lo que respecta a la interacción con el usuario.

   1- El usuario accede e **inicia sesion**, en dado caso que el usuario no tenga una cuenta, se realiza el **registro** y por consiguiente, la **creacion de su usuario y contraseña.**

   2- Despúes del **registro**, el usuario procede a **iniciar sesión** y a continuacion da con el **Dashboard**.
Una vez en el **dashboard**, el usuario tiene la posibilidad de **cerrar sesion**, **seleccionar un proyecto** o en dado caso de que no exista ningun proyecto, el usuario tiene la opcion de **crear un proyecto**.

3- Si la seleccion es la **creacion de un proyecto**, el usuario procede a crear su proyecto y una vez terminado, regresa al **Dashboard**.

   4- Si se selecciona la opcion **seleccion de proyecto**, el usuario tiene varias opciones:
- **Cierre de proyecto**:
Una vez seleccionado el proyecto deseado, el usuario puede darle **cierre al proyecto** y despues de cerrarlo regresa al **Dashboard**.

- **Manejo de Usuarios**:
El usuario tiene la posibilidad de añadir, eliminar o modificar miembros.
Una vez que el usuario concluye sus tareas en esta seccion, tiene la opcion de** cerrar el proyecto**, regresar al** Dashboard**, **cerrar sesion** o acceder al **manejo** o **creacion de tareas**, que serán asignadas a los miembros del proyecto.

5- Y por ultimo, si el usuario ha terminado de **manejar** o **crear tareas**, tiene la      posibilidad de finalizar su interaccion con el sistema.

[![Diagrama de interaccion](https://raw.githubusercontent.com/miguel-cortinas/flappy/main/diagrama%20de%20interaccion.jpeg?token=GHSAT0AAAAAAB7LJ2EODZN25JPZXNQE5H6SZASJ2YA "Diagrama de interaccion")](https://raw.githubusercontent.com/miguel-cortinas/flappy/main/diagrama%20de%20interaccion.jpeg?token=GHSAT0AAAAAAB7LJ2EODZN25JPZXNQE5H6SZASJ2YA "Diagrama de interaccion")

