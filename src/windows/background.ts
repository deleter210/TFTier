import { openWindowByName } from './windowUtils';
import { initGameEventListeners } from '../services/gameEvents';

initGameEventListeners();

const TFT_GAME_ID = 5426;

function showWindow(name: string) {
  overwolf.windows.obtainDeclaredWindow(name, result => {
    if (result.success && result.window) {
      overwolf.windows.restore(result.window.id);
    }
  });
}

overwolf.games.onGameInfoUpdated.addListener(info => {
  const gameInfo = info?.gameInfo;
  if (gameInfo?.id === TFT_GAME_ID) {
    if (info.runningChanged) {
      if (gameInfo.isRunning) {
        showWindow('overlay');
      } else {
        showWindow('summary');
        showWindow('dashboard');
      }
    }
  }
});

overwolf.games.onGameLaunched.addListener(gameInfo => {
  if (gameInfo.id === TFT_GAME_ID) {
    showWindow('overlay');
  }
});

overwolf.games.getRunningGameInfo(gameInfo => {
  if (!gameInfo || gameInfo.id !== TFT_GAME_ID || !gameInfo.isRunning) {
    showWindow('dashboard');
  }
});
