
# Diagrama de clases

En este diagrama de clases, las clases **proyecto** y **Miembro** representan los expedientes de proyectos y los miembros del equipo de desarrollo, respectivamente y por supuesto, con sus respectivos atributos y que a su vez, tienen una asociación de tipo composición. La clase **Habilidad** representa la clasificación de habilidades como *junior*, *senior* o *master*.

La clase **RedSocial** representa las posibles redes sociales que el usuario puede utilizar para su inicio de sesión, mientras que la clase **Roles**  representan los roles que pueden ser asignados a cada usuario dentro de un proyecto.

En resumen, este diagrama de clases muestra cómo las diferentes clases están relacionadas entre sí para satisfacer los requisitos dados.

![diagrama de clases](https://github.com/ManuelBalderramaCh/manejador-de-proyectos/blob/main/diagrama%20de%20clases.jpg)

------------


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
Una vez que el usuario concluye sus tareas en esta seccion, tiene la opcion de ** cerrar el proyecto** , regresar al ** Dashboard** , **cerrar sesion** o acceder al **manejo** o **creacion de tareas**, que serán asignadas a los miembros del proyecto.

5- Y por ultimo, si el usuario ha terminado de **manejar** o **crear tareas**, tiene la      posibilidad de finalizar su interaccion con el sistema.

![diagrama de interaccion](https://github.com/ManuelBalderramaCh/manejador-de-proyectos/blob/main/diagrama%20de%20interaccion.jpeg)

------------
# Diagrama de secuencia

Este diagrama está orientado a como los desarrolladores dentro de la aplicación web van a poder interactuar entre ellos y el programa, dividiendolos en los 3 roles posibles: **Product Owner, SCRUM master y Developer.** Básicamente podremos identificar las tareas que cada rol tiene dentro del proyecto, para poder identificar lo que se debe desarrollar en cada rol.

![diagrama de secuencia](https://ibb.co/DbD6P42)

------------

# Diagrama de componentes

Este diagrama nos permite ver los componentes del proyecto y cómo están organizados entre sí. También nos da una idea de lo que contiene cada contenedor (o componente), viendo cada subcomponente dentro de el. Dentro de cada rol, desarrollador, scrum master y el product owner, podemos observar lo que realiza cada uno, y componentes basados en ellos, como se conectan entre si para lograr el producto final.

![diagrama de componentes](https://ibb.co/cYWGSXX)

------------

# Imagen de docker funcional en docker hub 

![docker1](https://github.com/ManuelBalderramaCh/manejador-de-proyectos/blob/main/docker1.jpeg)


------------


![docker2](https://github.com/ManuelBalderramaCh/manejador-de-proyectos/blob/main/docker2.jpeg)

------------

![docker3](https://github.com/ManuelBalderramaCh/manejador-de-proyectos/blob/main/docker3.jpeg)

