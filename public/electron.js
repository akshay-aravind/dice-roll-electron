const path = require("path")

const { app, BrowserWindow } = require("electron")
const isDev = require("electron-is-dev")

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const isDev = require("electron-is-dev")

  // Handle creating/removing shortcuts on Windows when installing/uninstalling
  if (require("electron-squirrel-startup")) {
    app.quit()
  } // NEW!

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  )

  //   Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" })
  }
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
