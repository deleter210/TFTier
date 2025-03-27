
// src/core/RiotAPI.ts

const RIOT_API_KEY = import.meta.env.VITE_RIOT_API_KEY;

if (!RIOT_API_KEY) {
  throw new Error("Riot API key is not defined. Please set VITE_RIOT_API_KEY in your .env file.");
}

export async function fetchMatch(matchId: string) {
  const url = `https://api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${RIOT_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching match data: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchSummonerByName(summonerName: string) {
  const url = `https://api.riotgames.com/tft/summoner/v1/summoners/by-name/${encodeURIComponent(summonerName)}?api_key=${RIOT_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching summoner data: ${response.statusText}`);
  }
  return response.json();
}
