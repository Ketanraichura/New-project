import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCurrentWeather, searchCity, weatherCodeLabels } from '../api/weather.js';
import Button from './Button.jsx';
import SectionCard from './SectionCard.jsx';

function WeatherApp() {
  const [cityInput, setCityInput] = useState('Mumbai');
  const [city, setCity] = useState('Mumbai');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let shouldUpdate = true;

    async function loadWeather() {
      setError('');
      setIsLoading(true);

      try {
        const location = await searchCity(city);
        const forecast = await getCurrentWeather(location);

        if (!shouldUpdate) {
          return;
        }

        setWeather({
          city: location.name,
          country: location.country,
          current: forecast.current,
          units: forecast.current_units,
        });
      } catch (weatherError) {
        if (shouldUpdate) {
          setError(weatherError.message);
          setWeather(null);
        }
      } finally {
        if (shouldUpdate) {
          setIsLoading(false);
        }
      }
    }

    loadWeather();

    return () => {
      shouldUpdate = false;
    };
  }, [city]);

  const weatherSummary = useMemo(() => {
    if (!weather) {
      return null;
    }

    return {
      condition:
        weatherCodeLabels[weather.current.weather_code] ?? 'Weather update',
      feelsLike: `${Math.round(weather.current.apparent_temperature)}${weather.units.apparent_temperature}`,
      humidity: `${weather.current.relative_humidity_2m}${weather.units.relative_humidity_2m}`,
      temperature: `${Math.round(weather.current.temperature_2m)}${weather.units.temperature_2m}`,
      wind: `${weather.current.wind_speed_10m} ${weather.units.wind_speed_10m}`,
    };
  }, [weather]);

  const handleCityInputChange = useCallback((event) => {
    setCityInput(event.target.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const nextCity = cityInput.trim();

    if (!nextCity) {
      setError('Type a city before checking the weather.');
      return;
    }

    setCity(nextCity);
  }, [cityInput]);

  return (
    <SectionCard>
      <h2 className="text-2xl font-semibold">Weather App</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        A tiny API project for practicing effects, async state, and render
        updates.
      </p>

      <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <input
          className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:ring-blue-950"
          onChange={handleCityInputChange}
          placeholder="Search city"
          type="text"
          value={cityInput}
        />
        <Button type="submit">Check weather</Button>
      </form>

      <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
        {isLoading && (
          <p className="text-slate-600 dark:text-slate-300">
            Fetching weather for {city}...
          </p>
        )}

        {error && !isLoading && (
          <p className="font-medium text-red-600 dark:text-red-400">{error}</p>
        )}

        {weather && weatherSummary && !isLoading && !error && (
          <div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {weather.city}, {weather.country}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {weatherSummary.condition}
                </p>
              </div>
              <p className="text-4xl font-bold">
                {weatherSummary.temperature}
              </p>
            </div>

            <dl className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-md bg-white p-3 dark:bg-slate-900">
                <dt className="text-sm text-slate-500 dark:text-slate-400">
                  Feels like
                </dt>
                <dd className="mt-1 font-semibold">
                  {weatherSummary.feelsLike}
                </dd>
              </div>
              <div className="rounded-md bg-white p-3 dark:bg-slate-900">
                <dt className="text-sm text-slate-500 dark:text-slate-400">
                  Humidity
                </dt>
                <dd className="mt-1 font-semibold">
                  {weatherSummary.humidity}
                </dd>
              </div>
              <div className="rounded-md bg-white p-3 dark:bg-slate-900">
                <dt className="text-sm text-slate-500 dark:text-slate-400">
                  Wind
                </dt>
                <dd className="mt-1 font-semibold">{weatherSummary.wind}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </SectionCard>
  );
}

export default WeatherApp;
