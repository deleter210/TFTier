// src/core/Analytics.ts

// Define your local game event type that includes a timestamp.
export type LocalGameEvent = {
  name: string;
  data: any;
  timestamp: number;
};

interface AnalyticsData {
  rounds: Array<{
    round: number;
    gold: number;
    income: number;
    win: boolean;
    unitsUsed: string[];
    itemsUsed: string[];
  }>;
  currentStreak: number;
  lastRound: number;
}

class Analytics {
  private analyticsData: AnalyticsData = {
    rounds: [],
    currentStreak: 0,
    lastRound: 0,
  };

  public processEvents(events: LocalGameEvent[]): void {
    events.forEach((event) => {
      console.log("Processing event:", event);
      // Adjust the event processing logic to match your real data.
      switch (event.name) {
        case "round_end": {
          // Expect event.data to include round, gold, income, win, unitsUsed, itemsUsed
          const { round, gold, income, win, unitsUsed, itemsUsed } = event.data;
          this.analyticsData.rounds.push({ round, gold, income, win, unitsUsed, itemsUsed });
          this.analyticsData.lastRound = round;
          this.analyticsData.currentStreak = win ? this.analyticsData.currentStreak + 1 : 0;
          break;
        }
        // Add additional cases for other event types as needed.
        default:
          console.warn(`Unhandled event: ${event.name}`);
      }
    });
  }

  public getAnalyticsData(): AnalyticsData {
    return this.analyticsData;
  }
}

export default new Analytics();
