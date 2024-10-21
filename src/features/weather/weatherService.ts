import { fetchGeolocation } from "./geoLocationService";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
interface Weather {
  id: number;
  /**
   * Group of weather parameters (Rain, Snow, Clouds etc.)
   */
  main: string;
  description: string;
  /**
   * Weather icon id
   */
  icon: string;
}
export interface WeatherResponse {
  weather: Weather[];
  name: string;
  main: {
    /**
     *  Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
     */
    temp: number;
    /**
     *  Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
     */
    feels_like: number;
    /**
     * Humidity, %
     */
    humidity: number;
  };
}

interface WeatherRequest {
  city: string;
  state?: string;
  countryCode?: string;
}
export const fetchWeather = async (
  props: WeatherRequest
): Promise<WeatherResponse | null> => {
  try {
    const geolocation = await fetchGeolocation(props);
    if (!geolocation) return null;

    const params = new URLSearchParams({
      appid: import.meta.env.VITE_WEATHER_API_KEY,
      lat: geolocation.lat.toString(),
      lon: geolocation.lon.toString(),
      units: "imperial",
    });
    const response = await fetch(
      `${WEATHER_API_URL}/weather?${params.toString()}`,
      {
        method: "get",
      }
    );

    if (!response.ok) {
      return null;
    }
    const data = (await response.json()) as WeatherResponse;
    return data;
  } catch (error) {
    console.log("error fetching weather", error);
    return null;
  }
};
