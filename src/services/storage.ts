/**
 * Simple caching and pinned comp storage layer using overwolf.settings
 */

const SETTINGS_KEY = 'tftier_comps';
const CACHE_KEY = 'tftier_cache';

export const pinnedComps = {
  async get(): Promise<any[]> {
    return new Promise(resolve => {
      overwolf.settings.getExtensionSettings(result => {
        if (result.success && result.settings) {
          const data = JSON.parse(result.settings[SETTINGS_KEY] || '[]');
          resolve(data);
        } else {
          resolve([]);
        }
      });
    });
  },

  async set(data: any[]): Promise<void> {
    return new Promise(resolve => {
      const settings: Record<string, any> = {};
      settings[SETTINGS_KEY] = JSON.stringify(data);
      overwolf.settings.setExtensionSettings({ settings }, () => resolve());
    });
  },
};

export const cacheJSON = {
  async get(key: string): Promise<any | null> {
    return new Promise(resolve => {
      overwolf.settings.getExtensionSettings(result => {
        const raw = result?.settings?.[CACHE_KEY];
        const parsed = raw ? JSON.parse(raw) : {};
        resolve(parsed[key] || null);
      });
    });
  },

  async set(key: string, value: any): Promise<void> {
    return new Promise(resolve => {
      overwolf.settings.getExtensionSettings(result => {
        const raw = result?.settings?.[CACHE_KEY];
        const parsed = raw ? JSON.parse(raw) : {};
        parsed[key] = value;
        const settings: Record<string, any> = {};
        settings[CACHE_KEY] = JSON.stringify(parsed);
        overwolf.settings.setExtensionSettings({ settings }, () => resolve());
      });
    });
  },
};
