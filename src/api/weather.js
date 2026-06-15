const WEATHER_BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODING_BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export const weatherCodeLabels = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  95: 'Thunderstorm',
};

async function getJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Weather service is not responding right now.');
  }

  return response.json();
}

export async function searchCity(city) {
  const params = new URLSearchParams({
    count: '1',
    format: 'json',
    language: 'en',
    name: city,
  });

  const data = await getJson(`${GEOCODING_BASE_URL}?${params.toString()}`);

  if (!data.results?.length) {
    throw new Error('No city found. Try a nearby larger city.');
  }

  return data.results[0];
}

export async function getCurrentWeather({ latitude, longitude }) {
  const params = new URLSearchParams({
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
    forecast_days: '1',
    latitude,
    longitude,
  });

  return getJson(`${WEATHER_BASE_URL}?${params.toString()}`);
}
