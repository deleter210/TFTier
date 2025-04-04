const API_KEY = import.meta.env.VITE_RIOT_API_KEY;
const TFT_REGION = 'americas';
const LOL_REGION = 'na1';

export async function getSummonerByName(summonerName: string) {
  if (!API_KEY) throw new Error('Riot API key is not set');
  const url = `https://${LOL_REGION}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${encodeURIComponent(summonerName)}`;
  const res = await fetch(url, { headers: { "X-Riot-Token": API_KEY } });
  return res.ok ? res.json() : null;
}

export async function getMatchHistory(puuid: string, count: number = 10) {
  const url = `https://${TFT_REGION}.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=${count}`;
  const res = await fetch(url, { headers: { "X-Riot-Token": API_KEY } });
  return res.ok ? res.json() : [];
}

export async function getMatchDetails(matchId: string) {
  const url = `https://${TFT_REGION}.api.riotgames.com/tft/match/v1/matches/${matchId}`;
  const res = await fetch(url, { headers: { "X-Riot-Token": API_KEY } });
  return res.ok ? res.json() : null;
}
