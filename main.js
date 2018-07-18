const {app,BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const api = require('./app/apiHandler');
require('dotenv').config();
if (process.env.NODE_ENV === "development") {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    });
}


let mainWin;
function createMainWindow() {
    if (!mainWin) {
        mainWin = new BrowserWindow({width: 1024, height: 729, minHeight: 729, minWidth: 1024 });

        let address;
        if (process.env.NODE_ENV === "development") {
            address = "http://localhost:8080/";
            mainWin.webContents.openDevTools();
            const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');
            installExtension([REACT_DEVELOPER_TOOLS,REDUX_DEVTOOLS])
                .then((name) => {console.log(`Added Extension:  ${name}`);})
                .catch((err) => {console.log('An error occurred: ', err);});

        } else {
            address = "file://public/index.html"
        }
        mainWin.loadURL(address);
        //mainWin.loadFile(address);


        mainWin.on('closed', () => mainWin = null);
    }
}

app.on('ready',createMainWindow);
app.on('window-all-closed',()=> process.platform !== 'darwin' ? app.quit() : '');
app.on('activate',createMainWindow);

ipcMain.on('USER_LOGIN',api.login);