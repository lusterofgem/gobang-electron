const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	});

	// win.openDevTools();

	win.loadFile('./html/index.html');
});
