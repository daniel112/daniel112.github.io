const GEO_API_URL = "http://api.openweathermap.org/geo/1.0";
interface GeoLocationResponse {
  country: string;
  name: string;
  state: string;
  lat: number;
  lon: number;
}

interface GeoLocationRequest {
  city: string;
  state?: string;
  countryCode?: string;
}

/**
 * https://openweathermap.org/api/geocoding-api
 */
export const fetchGeolocation = async (
  props: GeoLocationRequest
): Promise<GeoLocationResponse | null> => {
  try {
    const { city, state = "", countryCode = "" } = props;
    const params = new URLSearchParams({
      appid: import.meta.env.VITE_WEATHER_API_KEY,
      q: `${city},${state},${countryCode}`,
    });
    const response = await fetch(`${GEO_API_URL}/direct?${params.toString()}`, {
      method: "get",
    });
    if (!response.ok) {
      console.log("Geolocation API Call failed");
      return null;
    }
    const data = await response.json();

    return data[0] as GeoLocationResponse;
  } catch (error) {
    console.log(error);
    return null;
  }
};
