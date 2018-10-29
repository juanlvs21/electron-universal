const electron = require('electron');
const { app, BrowserWindow } = electron;

const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({ width: 1000, height: 700 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'), // Carga el index de tu pagina web (en este caso desde src/index.html)
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)