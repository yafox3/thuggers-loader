import { app } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1024,
    height: 720,
    resizable: false,
    autoHideMenuBar: true,
    opacity: .99,
    fullscreenable: false,
    webPreferences: {
			nodeIntegration: true
    }
  });

  if (isProd) {
    await mainWindow.loadURL('app://./login.html');
    mainWindow.removeMenu()
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/login`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
