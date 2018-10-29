## Universal Electron

Proyecto base para adaptar cualquier proyecto web como aplicación de escritorio multiplataforma en Electron.

## Estructura
- `main.js`
    - Es la base de todo el proyecto, posee todas las configuraciones necesarias para emplear las tecnologias web en aplicaciones de escritorio multiplataformas.

- `src`
    - Esta carpeta es donde se colocaran los archivos de la pagina web seleccionada.

- `release-builds`
    - Salida de la aplicacion de escritorio ya generada.

## Comandos
- `npm install`: Instala librerias requerias en el uso de angular.

- `npm start`: Inicia el comando `electron main.js` y de este modo la ejecucion de la aplicación en modo de desarrollo.

- `npm run package-mac`: 
    - `--icon=src/favicon.icns`: Icono que tendrá la aplicación en formato .icns.
    - `--platform=darwin`: Refleja que será un aplicación soportada Darwin o Mac OS X.
    - `--arch=x64`: Define la arquitectura soportada. 
    - `--out=release-builds`: Especifica la carpeta salida.
    - Para mas información del comando leer `package.json`.

- `npm run package-win`: 
    - `NombreAplicacion`: Especifica el nombre que tendra la aplicacion y dicho ejecutable.
    - `--icon=src/favicon.ico`: Icono que tendrá la aplicación en formato .ico.
    - `--platform=win32`: Refleja que será un aplicación soportada Windows 32bits.
    - `--arch=ia32`: Define la arquitectura soportada.
    - `--out=release-builds`: Especifica la carpeta salida.
    - Para mas información del comando leer `package.json`.

- `npm run package-linux`: 
    - `NombreAplicacion`: Especifica el nombre que tendra la aplicacion y dicho ejecutable.
    - `--icon=src/favicon.png`: Icono que tendrá la aplicación en formato .png.
    - `--platform=linux`: Refleja que será un aplicación soportada cualquier distribución de Linux.
    - `--arch=x64`: Define la arquitectura soportada.
    - `--out=release-builds`: Especifica la carpeta salida.
    - Para mas información del comando leer `package.json`.

    