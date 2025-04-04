/**
 * Local persistent storage using Overwolf Extension Settings.
 */

// Define allowed storage keys
type TFTierStorageKeys = 'tftier_comps' | 'tftier_cache';

// Extend Overwolf's settings typing
interface TFTierExtensionSettings extends Partial<Record<TFTierStorageKeys, any>> {}

// Load pinned team comps
export function loadPinnedComps(): Promise<any[]> {
  return new Promise(resolve => {
    overwolf.settings.getExtensionSettings(res => {
      const settings = res.settings as TFTierExtensionSettings;
      if (res.success) {
        resolve(settings?.tftier_comps ?? []);
      } else {
        resolve([]);
      }
    });
  });
}

// Save pinned team comps
export function savePinnedComps(data: any[]): void {
  overwolf.settings.setExtensionSettings({
    ["tftier_comps"]: data
  }, () => {
    console.log("Pinned comps saved");
  });
}

// Load cached cheat sheet
export function loadCheatSheetCache(): Promise<any> {
  return new Promise(resolve => {
    overwolf.settings.getExtensionSettings(res => {
      const settings = res.settings as TFTierExtensionSettings;
      if (res.success) {
        resolve(settings?.tftier_cache ?? null);
      } else {
        resolve(null);
      }
    });
  });
}

// Save cheat sheet cache
export function saveCheatSheetCache(data: any): void {
  overwolf.settings.setExtensionSettings({
    ["tftier_cache"]: data
  }, () => {
    console.log("Cheat sheet cache saved");
  });
}
