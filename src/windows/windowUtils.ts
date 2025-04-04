export function openOverlayWindow() {
  overwolf.windows.obtainDeclaredWindow("overlay", result => {
    if (result.window && !result.error) {
      overwolf.windows.restore(result.window.id, console.log);
    }
  });
}

export function openSummaryWindow() {
  overwolf.windows.obtainDeclaredWindow("summary", result => {
    if (result.window && !result.error) {
      overwolf.windows.restore(result.window.id, console.log);
    }
  });
}
