import { initGameEventListeners, openOverlayWindow, openSummaryWindow } from '../services/gameEvents';

initGameEventListeners();

overwolf.games.onGameInfoUpdated.addListener(info => {
  const gameInfo = info?.gameInfo;
  if (gameInfo?.id === 5426) {
    if (info.runningChanged && gameInfo.isRunning) {
      console.log('TFT launched, showing overlay.');
      openOverlayWindow();
    } else if (info.runningChanged && !gameInfo.isRunning) {
      overwolf.windows.obtainDeclaredWindow("overlay", result => {
        if (result.window) overwolf.windows.close(result.window.id);
      });
      openSummaryWindow();
    }
  }
});

overwolf.games.onGameLaunched.addListener(info => {
  if (info?.id === 5426) {
    openOverlayWindow();
  }
});
