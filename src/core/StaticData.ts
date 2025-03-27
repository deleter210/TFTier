// Use the latest Data Dragon version for TFT Set 14
const DATA_DRAGON_VERSION = '14.0.1';
const DATA_DRAGON_URL = `https://ddragon.leagueoflegends.com/cdn/${DATA_DRAGON_VERSION}/data/en_US/tft-set14.json`;

export async function fetchTFTStaticData() {
  const response = await fetch(DATA_DRAGON_URL);
  if (!response.ok) {
    throw new Error(`Error fetching static data: ${response.statusText}`);
  }
  const data = await response.json();
  // Optionally, cache this data using Overwolf's file system API
  return data;
}
