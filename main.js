const { app, BrowserWindow } = require('electron')
const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	});

	// win.openDevTools();

	win.loadFile('./html/index.html');
}

app.whenReady().then(() => {
	createWindow();
})
