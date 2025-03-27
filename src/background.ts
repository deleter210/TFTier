// src/background.ts

import { subscribeToGameEvents } from "./core/GeoService";
import Analytics from "./core/Analytics";

/**
 * Initialize background processes:
 *  - Subscribe to live game events and update analytics.
 *  - Optionally set up periodic sync or additional background tasks.
 */
function initBackground() {
  subscribeToGameEvents((events) => {
    // Process the mapped events to update analytics.
    Analytics.processEvents(events);
  });

  // Optional: Set up a periodic sync (e.g., log analytics data every minute)
  setInterval(() => {
    console.log("Periodic sync: Analytics data", Analytics.getAnalyticsData());
  }, 60000);
}

initBackground();
