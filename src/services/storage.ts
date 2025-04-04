// Placeholder for settings or file-based storage

export function saveSettings(data: any) {
  overwolf.settings.setExtensionSettings({ settings: data }, result => {
    if (!result.success) console.error("Failed to save settings", result.error);
  });
}

export function loadSettings(): Promise<any> {
  return new Promise(resolve => {
    overwolf.settings.getExtensionSettings(result => {
      if (result.success && result.settings) {
        resolve(result.settings);
      } else {
        resolve(null);
      }
    });
  });
}
