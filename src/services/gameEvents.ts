type InfoUpdates = { [feature: string]: any };
type NewGameEvent = { name: string, data: any };

export function initGameEventListeners() {
  if (!res.success) {
    console.error("Failed to set required features for TFT events:", res.error);
  } else {
    console.log("Required features set:", res.supportedFeatures);
  }
  overwolf.games.events.onInfoUpdates2.addListener(payload => {
    const info = payload?.info as InfoUpdates;
    if (!info) return;

    if (info.match_info?.game_over !== undefined) {
      openSummaryWindow();
    }
  });

  overwolf.games.events.onNewEvents.addListener(payload => {
    payload?.events?.forEach(ev => {
      console.log('New Event:', ev.name, ev.data);
    });
  });
}

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
