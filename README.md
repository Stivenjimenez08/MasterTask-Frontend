# Master Task - Aplicación  de Gestion de Tareas

Master Task es una aplicación dedicada a la gestión de tareas y notas, proporcionando a los usuarios la capacidad de crear perfiles personalizados para una experiencia de usuario autónoma. Desde la aplicación puedes realizar las siguientes acciones de manera eficiente:

Gestión de Tareas:

Visualiza, crea, edita y elimina tus tareas de manera conveniente y eficaz.
Perfil Personalizado:

Crea y administra tu perfil de usuario sin complicaciones, personalizando la información según tus necesidades.
La interfaz intuitiva de Master Task garantiza una experiencia fluida para los usuarios, permitiéndoles concentrarse en la organización y ejecución efectiva de sus tareas diarias. Simplifica tu vida cotidiana con Master Task y lleva un control total sobre tus actividades.

## Desarrollo

El desarrollo se compone de 3 partes:

* Front-end: El frontend de esta aplicación se construye con React y Vite, adoptando la metodología de Atomic Design. React proporciona una biblioteca eficiente para crear interfaces de usuario interactivas, mientras que Vite optimiza el desarrollo al ofrecer una configuración rápida. La metodología de Atomic Design guía el desarrollo de componentes, organizándolos en átomos, moléculas y organismos para una estructura modular y mantenible.

* Back-end: Desarrollado con Node.js, Express y TypeScript, el back-end de esta aplicación ofrece un entorno eficiente y escalable. Node.js proporciona una ejecución rápida de JavaScript en el servidor, mientras que Express simplifica la creación de APIs. TypeScript agrega tipado estático para mejorar la mantenibilidad del código. La estructura modular y las dependencias clave se combinan para construir un back-end robusto y eficiente.

* Base de Datos: Master Task utiliza MySQL para gestionar datos clave, como información de usuario y detalles de notas. Dos tablas catálogo respaldan la creación y edición de notas, asegurando consistencia y eficiencia.

    **Principales Características de la Base de Datos:**
    
    **Gestión de Usuarios:**

    * Almacena y organiza la información de los usuarios, garantizando la autenticación segura y la personalización de perfiles.

    
    **Gestión de Notas:**

    * Registra detalles precisos de cada nota, permitiendo operaciones como creación, edición y eliminación de manera eficaz.

    **Tablas Catálogo:**

    * Dos tablas catálogo respaldan la creación y edición de notas, proporcionando una estructura sólida para garantizar consistencia y eficiencia.

## Aplicacion web
 
Haz clic en el siguiente enlace para acceder a nuestra página web y crear tu usuario. Desde allí, podrás dar inicio a la gestión de tus tareas y optimizar tu productividad.   [MASTER TASK](https://mastertask-frontend-production.up.railway.app/)

## Modo de Uso

1. Al iniciar la aplicación, serás recibido por la vista inicial. Para crear tu cuenta, simplemente haz clic en **Create an account**, lo que te llevará a la siguiente vista (Vista 2).
![Login](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/58251ca7-a4d1-497d-8e6b-732f2440e0b0)
2. Aqui tendras que crear tu cuenta ingresando un nombre de usuario, correo valido (en caso de perder tu contraseña a este correo sera enviado un enlace de recuperación) y contraseña. Una vez presiones el boton de create an account seras redirigido a la vista principal (login)
![Create an account](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/401116d3-6e4b-4a4a-bebe-61d6aee19b7f)
3. En caso de ya tener una cuenta pero no recordar la contraseña debes seleccionar **Cant't sign in?** para ir a la siguiente vista, donde tendras que ingresar tu correo para que se envie un enlace de recuperación y puedas realizar el cambio de contraseña 
![Recovery your account](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/ce4f6ee3-4ccf-475e-aad4-cb6fca474e8a)
4. Una vez inicies sesion la vista principal sera la seccion de **Task**, en esta vista podras crear nuevas notas, ver tus notas creadas y tambien editar o eliminar tus notas.
![Task](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/f151c7d0-5344-4ab8-b231-d32ac75f17bf)
5. En la opcion del menu **Profile** tendras la siguiente vista
![Profile](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/77fc036a-6ebc-481a-b8f2-9d45a557b4bf)
   -Para editar tu informacion da click al boton **Update profile** y te llevara a la siguiente vista, una vez hallas modificado la informacion que requieras(la actualización de foto de perfil se realiza mediante url) da click al boton **update information** para guardar todos los cambios. 
   ![Edit profile](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/b855125e-03d9-4ab8-a945-b43e5f033558)
   -Para cambiar tu contraseña  da click al boton **Update password** que te llevara a la sigueinte vista, una vez hallas introducido tu nueva contraseña da click al boton **update Password** para guardar los cambios
   ![update password](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/3b0fe88f-ea55-47fa-89cf-6ef6bc5e8096)
   -Una vez hallas cambiado la informacion que necesites tu perfil podria verse de la siguiente manera
   ![profile](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/1c005b85-6c15-495f-9ba5-4bbfc2479f40)

6.Ahora volvemos a apartado de menu **Task**. Para crear una nota debes dar click al signo + que aparece en la parte inferior derecha de la pantalla y podras visualizar lo siguiente. Una vez completes toda la informacion necesaria oprime el boton guardar para terminar de crear la nota.
![Create note](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/2928ce9b-eef4-4670-9eb9-6811332269c1)
   
7. Cuando tienes notas creadas se vera de la siguiente manera
![Note](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/6597c1f2-dba3-46cc-a09b-84c8c935386b)
   -Para editar la nota basta con dar click sobre ella para que se pueda visualizar y editar toda la informacion de la nota necesaria. Una vez termines de editar la nota oprime el boton guardar para actualizar la informacion modificada.
   ![Edit note](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/575490d1-835a-4b96-a736-208872a39976)
   -Para eliminar una nota basta con dar click sobre ella para poder visualizar la nota (es la misma vista de edicion) y dar click al boton de eliminar. Una vez le das click a este boton te pide confirmar la eliminacion de la nota, lo cual se hace dando click en el boton eliminar. De esta manera la nota deja de mostrarse en la vista de Task
   ![Delete note](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/c2069fa3-8ac6-4c3b-8331-de374cab736c)
8. En la opcion del menu **Task Board** podras ver todas tus notas organizadas de acuerdo a su estado (pendiente, en proceso o completado) de la sigueinte manera
   ![Task Board](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/51dee851-b1e9-4619-b049-e8b87bb158bf)
9. En la opcion del menu **Task Filter** podras filtrar todas tus notas de acuerdo a su estado y prioridad (es necesario seleccionar una opcion en cada filtro para mostrar las notas que concuerden) de la siguiente manera
   ![Filter Task](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/f304d901-e3a3-4282-b86f-02425788fd94)
10. En la opcion del menu **Calendar** podras visualizar un calendario por el que podras navegar y visualizar el dia para el cual quieras agregar una nota
   ![Calendar](https://github.com/Stivenjimenez08/MasterTask-Frontend/assets/117239706/76f1493d-b2e4-4f12-a4a9-4f2a6428fe76)
11. Para cerrar tu sesión da click a la ultima opcion del menu **Logout**, esto te llevara nuevamente a la vista de login


