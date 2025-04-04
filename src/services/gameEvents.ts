import { openOverlayWindow, openSummaryWindow } from '../windows/windowUtils';

let isTFTGameRunning = false;
let currentGold = 0;
let currentStreak = 0;
let lastHealth = 100;

type InfoPayload = {
  me?: { gold?: string; health?: string };
  match_info?: { game_over?: any };
  [key: string]: any;
};

export function initGameEventListeners() {
  overwolf.games.events.setRequiredFeatures(
    ['me', 'match_info', 'roster', 'board'],
    (res: overwolf.games.events.SetRequiredFeaturesResult) => {
      if (!res.success) {
        console.error("Failed to set required features for TFT events:", res.error);
      } else {
        console.log("Required features set:", res.supportedFeatures);
      }
    }
  );

  overwolf.games.events.onInfoUpdates2.addListener(payload => {
    if (!payload || !payload.info) return;
    const info = payload.info as InfoPayload;

    if (info.me) {
      if (info.me.gold !== undefined) {
        currentGold = parseInt(info.me.gold, 10);
      }
      if (info.me.health !== undefined) {
        const newHealth = parseInt(info.me.health, 10);
        if (newHealth < lastHealth) {
          currentStreak = 0;
        } else if (newHealth >= lastHealth) {
          currentStreak += 1;
        }
        lastHealth = newHealth;
      }
    }

    if (info.match_info?.game_over !== undefined) {
      console.log('Match ended, opening summary window...');
      openSummaryWindow();
    }
  });

  overwolf.games.events.onNewEvents.addListener(payload => {
    if (!payload || !payload.events) return;
    payload.events.forEach(ev => {
      console.log('New Game Event:', ev.name, ev.data);
    });
  });
}

export { openOverlayWindow, openSummaryWindow };
