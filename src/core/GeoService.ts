/// <reference path="../types/overwolf.d.ts" />

import { LocalGameEvent } from "../core/Analytics";

// Create type aliases for clarity using the Overwolf types.
type OVGameEvent = overwolf.games.events.GameEvent;
type OVNewGameEvents = overwolf.games.events.NewGameEvents;

/**
 * Subscribes to live game events from Overwolf.
 * The callback receives an array of LocalGameEvent objects with a timestamp.
 */
export function subscribeToGameEvents(callback: (events: LocalGameEvent[]) => void): void {
  if (window.overwolf && window.overwolf.games && window.overwolf.games.events) {
    window.overwolf.games.events.onNewEvents.addListener((event: OVNewGameEvents) => {
      console.log("Received live game events:", event);
      // Map each raw event to a local event that includes a timestamp.
      const localEvents: LocalGameEvent[] = event.events.map((evt: OVGameEvent) => ({
        name: evt.name,
        data: evt.data,
        // If evt.timestamp is missing, default to Date.now()
        timestamp: (evt as any).timestamp || Date.now(),
      }));
      callback(localEvents);
    });
  } else {
    console.warn("Overwolf GEO API not available");
  }
}
