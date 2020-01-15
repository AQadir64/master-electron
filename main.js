// Modules
const { app, BrowserWindow } = require("electron");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

setTimeout(() => {
  console.log("app is ready:" + app.isReady());
}, 2000);

// Create a new BrowserWindow when `app` is ready
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 800,
    webPreferences: { nodeIntegration: true },
    backgroundColor: "linear-gradient(to left , rgb(28, 243, 243) ,  rgb(28, 243, 178))"
  });

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile("index.html");
  // mainWindow.loadURL("https://cartverse-olx.herokuapp.com/");

  // Open DevTools - Remove for PRODUCTION!
  // mainWindow.webContents.openDevTools();

  mainWindow.once("ready-to-show", mainWindow.show);

  // Listen for window being closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// app.on("browser-window-blur", () => {
//   console.log("app unfocused");
//   setTimeout(app.quit, 3000);
// });

// app.on("browser-window-focus", () => {
//   console.log("app focused");
// });

app.on("before-quit", e => {
  console.log("queting the app");
  // e.preventDefault();
});

// Electron `app` is ready
app.on("ready", () => {
  console.log("app is ready to launch");
  // console.log(app.getPath("desktop"));
  // console.log(app.getPath("temp"));
  // // console.log(app.getPath("github"));

  // console.log(app.getPath("music"));
  createWindow();
});

// Quit when all windows are closed - (Not macOS - Darwin)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
