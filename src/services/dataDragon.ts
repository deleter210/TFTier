import { loadCheatSheetCache, saveCheatSheetCache } from './storage';

const CDN = 'https://ddragon.leagueoflegends.com/cdn';
const VERSION_URL = 'https://ddragon.leagueoflegends.com/api/versions.json';

export async function getLatestVersion(): Promise<string> {
  const versions = await fetch(VERSION_URL).then(res => res.json());
  return versions[0];
}

export async function getItems(): Promise<any[]> {
  const version = await getLatestVersion();
  const key = `items-${version}`;
  const cached = await loadCheatSheetCache();
  if (cached?.[key]) return cached[key];

  const url = `${CDN}/${version}/data/en_US/item.json`;
  const data = await fetch(url).then(res => res.json());
  const items = Object.values(data.data);

  await saveCheatSheetCache({ [key]: items });
  return items;
}
