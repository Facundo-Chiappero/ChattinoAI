## ESPAÑOL:

Puedes acceder al chat desde este enlace: [https://chattinoai.netlify.app/](https://chattinoai.netlify.app/)

Este es un chat interactivo personalizado creado con **React** y **Tailwind CSS** que utiliza la **IA de Gemini-1.5-Flash** para ofrecer una experiencia conversacional fluida. El chat tiene conocimiento sobre los talentos de **Hololive English Justice** y permite a los usuarios interactuar libremente. Además, los usuarios pueden utilizar emoticonos como stickers dentro del chat para expresar emociones.

## Importante

Este proyecto tiene un archivo de configuración para **Netlify**, lo cual facilita el despliegue en ese host específico. Si deseas usarlo en otro servicio de hosting o en local, se deben realizar algunas modificaciones:

- Si tienes pensado usar el proyecto en local puedes borrar la constante `HOST_BACKEND_URL` en la linea 23 del archivo `./src/hooks/useChat.js`

- De lo contrario si usaras el proyecto en un host debes borrar o comentar la linea 20 de dicho archivo y modificar el valor de la constante `HOST_BACKEND_URL` dentro de `./src/utils/constants.js`

- La carpeta `functions` y el archivo `public/netlify.toml` están configurados para que funcione específicamente en **Netlify**. Si deseas desplegarlo en otro servicio de hosting, por favor consulta la documentación de ese servicio para hacer las configuraciones correspondientes.
  
- Para usar el proyecto **en local**, debes agregar un archivo `.env.local` en la raíz del proyecto y colocar lo siguiente: `VITE_BACKEND_URL=http://localhost:3001`.

  Puedes usar el puerto que prefieras para tu backend (en este caso estamos usando el `3001`).

- Dentro de la carpeta `utils/constants.js`, hay una constante llamada `HOST_BACKEND_URL`. Esta constante debe ser cambiada si se desea subir el proyecto a un host distinto a **Netlify**. Actualízala con la URL del host que estés utilizando.

## Características

- **Chat libre**: Los usuarios pueden hablar de cualquier tema o hacer preguntas a la IA.
- **Emoticonos personalizados**: Los usuarios pueden enviar mensajes con emojis que muestran imágenes como stickers. Emoticonos:
  - 👋: <img src="./public/flower.png" alt="Chattino con una flor" width="50"/>
  - 🚀: <img src="./public/chattinoJetpack.png" alt="Chattino con un jetpack" width="50"/>
  - ♥: <img src="./public/mamaLove.png" alt="Chattino abrazando a Raora Panthera" width="50"/>
  - 😂: <img src="./public/raoLaugh.png" alt="Raora Panthera riendose" width="50"/>
  - 🥒: <img src="./public/cucumber.png" alt="Chattino con un pepino" width="50"/>
- **Conocimiento de Hololive English Justice**: La IA está entrenada para conocer detalles y responder sobre los talentos de Hololive English Justice.
- **Interfaz sencilla**: Utiliza **React** y **Tailwind CSS** para una experiencia de usuario ágil y moderna.

## Tecnologías usadas

- **React**: Librería de JavaScript para construir la interfaz de usuario y manejar las respuestas de la IA.
- **Tailwind CSS**: Framework de CSS para un diseño rápido y personalizado.
- **Gemini-1.5-Flash**: IA que proporciona las respuestas en el chat, entrenada con información sobre Hololive English Justice.

## Instalación

Este proyecto puede ser levantado tanto en desarrollo como en producción. Sigue los pasos a continuación según el entorno en el que desees ejecutarlo.

### Versión de Desarrollo (Local)

Para ejecutar la versión de desarrollo, sigue estos pasos:

1. **Clona el repositorio**:

  ```bash
    git clone https://github.com/Facundo-Chiappero/ChattinoAI.git
    cd translator
  ```
2. **Configura los archivos `.env`**:

   - Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

    ```bash
     VITE_BACKEND_URL=http://localhost:3001
    ```
   - Mientras estés en modo desarrollo se usará la variable de entorno `VITE_BACKEND_URL` para hacer las peticiones al servidor.

   - Dentro de la carpeta `backend`, crea un archivo `.env` con lo siguiente:

    ```bash
     API_KEY=tu_api_key_de_gemini
     FRONTEND_URL=http://localhost:5173
     BACKEND_URL=http://localhost:3001
    ```

     Para ambas URLs puedes seleccionar el puerto que prefieras cambiando el número al final de la misma, ten en cuenta que `BACKEND_URL` y `VITE_BACKEND_URL` deben ser iguales y que `FRONTEND_URL` debe ser la url que aparece al ejecutar `npm run dev`.

3. **Instala las dependencias**:

   - Dentro de la carpeta `ChattinoAI`, ejecuta:

    ```bash
     npm install
    ```

   - Dentro de la carpeta `backend`, ejecuta:

    ```bash
     npm install
    ```
4. **Levanta el proyecto**:

   - En una terminal, navega hasta la carpeta `ChattinoAI` y ejecuta:

    ```bash
     npm run dev
    ```
   - En otra terminal, navega hasta la carpeta `backend` y ejecuta:

    ```bash
     node index.js
    ```
   Ahora el proyecto debería estar corriendo en [http://localhost:5173](http://localhost:5173) (o el puerto que hayas seleccionado).


### Versión de Producción

Si deseas subir el proyecto a **Netlify** u otro host:

1. **Clona el repositorio**:

  ```bash
    git clone https://github.com/Facundo-Chiappero/ChattinoAI.git
    cd translator
  ```

2. **Netlify**: El proyecto está configurado específicamente para ser desplegado en **Netlify**. Las configuraciones necesarias ya están en la carpeta `functions` y el archivo `public/netlify.toml`.
    
3. **Otros Hosts**: Si deseas usar un host diferente, asegúrate de cambiar la constante `HOST_BACKEND_URL` en `utils/constants.js` a la URL de tu backend. También revisa y modifica la carpeta `functions` y el archivo `public/netlify.toml` según lo que requiera el host.

4. **Build**: Puedes ejecutar el siguiente comando para crear la carpeta `dist`, cuyos archivos subirás al host, en el caso de Netlify junto con la carpeta `functions`, un archivo `package.json` y el archivo `./src/utils/instructions.js`, con el contenido indicado a continuación:

   - Comando:

    ```bash
     npm run build
    ```
   - `package.json`:

    ```json
    {
      "name": "backend",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "type": "commonjs",
      "dependencies": {
        "@google/generative-ai": "^0.24.0",
        "cors": "^2.8.5",
        "dotenv": "^16.4.7",
        "express": "^4.21.2"
      }
    }
    ```
  - `instructions.js`
  ```js
    const INSTRUCTIONS = `todas las instrucciones aquí (puedes copiar y pegar)`

    module.exports = {
    INSTRUCTIONS: INSTRUCTIONS,
    };
  ```

## ENGLISH:

You can access the chat through this link: [https://chattinoai.netlify.app/](https://chattinoai.netlify.app/)

This is a custom interactive chat created with **React** and **Tailwind CSS** that uses **Gemini-1.5-Flash AI** to provide a smooth conversational experience. The chat has knowledge about the talents of **Hololive English Justice** and allows users to interact freely. Additionally, users can use custom emojis as stickers within the chat to express emotions.

## Important

This project has a configuration file for **Netlify**, which facilitates deployment on that specific host. If you want to use it on another hosting service or locally, some modifications must be made:

- If you plan to use the project locally, you can delete the constant `HOST_BACKEND_URL` on line 23 of the `./src/hooks/useChat.js` file.

- Otherwise, if you will use the project on a host, you should delete or comment out line 20 of that file and modify the value of the constant `HOST_BACKEND_URL` inside `./src/utils/constants.js`.

- The `functions` folder and the `public/netlify.toml` file are configured to work specifically on **Netlify**. If you want to deploy it on another hosting service, please consult the documentation of that service to make the corresponding configurations.

- To use the project **locally**, you must add a `.env.local` file in the project root and place the following: `VITE_BACKEND_URL=http://localhost:3001`.

  You can use the port you prefer for your backend (in this case, we are using `3001`).

- Inside the `utils/constants.js` folder, there is a constant called `HOST_BACKEND_URL`. This constant must be changed if you want to upload the project to a host other than **Netlify**. Update it with the URL of the host you are using.


## Features

- **Free chat**: Users can talk about any topic or ask questions to the AI.
- **Custom emojis**: Users can send messages with emojis that display images as stickers. Emojis:
  - 👋: <img src="./public/flower.png" alt="Chattino with a flower" width="50"/>
  - 🚀: <img src="./public/chattinoJetpack.png" alt="Chattino with a jetpack" width="50"/>
  - ♥: <img src="./public/mamaLove.png" alt="Chattino hugging a Raora Panthera" width="50"/>
  - 😂: <img src="./public/raoLaugh.jpeg" alt="Raora Panthera laughing" width="50"/>
  - 🥒: <img src="./public/cucumber.png" alt="Chattino con un pepino" width="50"/>
- **Knowledge of Hololive English Justice**: The AI is trained to know details and respond about the talents of Hololive English Justice.
- **Simple interface**: Uses **React** and **Tailwind CSS** for a fast and modern user experience.

## Technologies used

- **React**: JavaScript library to build the user interface and handle AI responses.
- **Tailwind CSS**: CSS framework for quick and customizable design.
- **Gemini-1.5-Flash**: AI that provides responses in the chat, trained with information about Hololive English Justice.

## Installation

This project can be run in both development and production environments. Follow the steps below according to the environment in which you want to run it.

### Development Version (Local)

To run the development version, follow these steps:

1. **Clone the repository**:

  ```bash
    git clone https://github.com/Facundo-Chiappero/ChattinoAI.git
    cd translator
  ```

2. **Configure the .env files**:

- Create a .env.local file in the root of the project with the following content:

  ```bash
  VITE_BACKEND_URL=http://localhost:3001
  ```
- While in development mode, the VITE_BACKEND_URL environment variable will be used to make requests to the server.

- Inside the backend folder, create a .env file with the following:

  ```bash
  API_KEY=your_gemini_api_key
  FRONTEND_URL=http://localhost:5173
  BACKEND_URL=http://localhost:3001
  ```

  For both URLs, you can select the port you prefer by changing the number at the end. Keep in mind that BACKEND_URL and VITE_BACKEND_URL must be the same, and FRONTEND_URL should be the URL that appears when running npm run dev.

3. **Install dependencies**:

- Inside the ChattinoAI folder, run:

  ```bash
  npm install
  ```

- Inside the backend folder, run:

  ```bash
  npm install
  ```
4. **Run the project**:

- In one terminal, navigate to the ChattinoAI folder and run:

  ```bash
  npm run dev
  ```
- In another terminal, navigate to the backend folder and run:

  ```bash
  node index.js
  ```
Now the project should be running at http://localhost:5173 (or the port you selected).

### Production Version

If you want to upload the project to **Netlify** or another host:

1. **Clone the repository**:

  ```bash
    git clone https://github.com/Facundo-Chiappero/ChattinoAI.git
    cd translator
  ```

2. **Netlify**: The project is specifically configured to be deployed on **Netlify**. The necessary configurations are already in the functions folder and the public/netlify.toml file.

3. **Other Hosts**: If you want to use a different host, make sure to change the HOST_BACKEND_URL constant in utils/constants.js to your backend URL. Also, review and modify the functions folder and the public/netlify.toml file according to the host's requirements.

4. **Build**: You can run the following command to create the dist folder, whose files you will upload to the host. In the case of Netlify, along with the functions folder, a package.json file, and the ./src/utils/instructions.js file with the content indicated below:

- Command:

  ```bash
  npm run build
  ```
- package.json:

  ```json
  {
    "name": "backend",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "commonjs",
    "dependencies": {
      "@google/generative-ai": "^0.24.0",
      "cors": "^2.8.5",
      "dotenv": "^16.4.7",
      "express": "^4.21.2"
    }
  }
  ```
- instructions.js
  ```javascript
  const INSTRUCTIONS = `all instructions here (you can copy and paste)`

  module.exports = {
    INSTRUCTIONS: INSTRUCTIONS,
  };
  ```
