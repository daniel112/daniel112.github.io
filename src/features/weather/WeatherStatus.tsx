import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { fetchWeather, WeatherResponse } from "./weatherService";
import { LoadingButton } from "@mui/lab";
import weatherIcon from "../../assets/weatherIcon.png";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export const WeatherStatus: FC = () => {
  const [textVal, setTextVal] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={weatherIcon}
        sx={{ objectFit: "contain" }}
        alt="weatherIcon"
      />
      <Typography variant="h4" fontWeight={"bold"}>
        Get Current Weather
      </Typography>
      <Box
        sx={{ justifyContent: "space-evenly", display: "flex", width: "100%" }}
      >
        <TextField
          label="city name"
          placeholder="queen creek"
          onChange={(e) => setTextVal(e.target.value)}
          size="small"
        />
        <LoadingButton
          variant="contained"
          loading={isLoading}
          disabled={!textVal}
          onClick={async () => {
            setIsLoading(true);
            const data = await fetchWeather({ city: textVal });
            setIsLoading(false);
            if (data) setWeatherData(data);
          }}
        >
          Search
        </LoadingButton>
      </Box>
      {weatherData && <WeatherCard data={weatherData} />}
    </Box>
  );
};

const WeatherCard: FC<{ data: WeatherResponse }> = ({ data }) => {
  const weatherDescription = data.weather?.[0].description ?? "";
  return (
    <Card sx={{ width: 400, height: 250 }}>
      <CardHeader title={`${data.name}`} subheader={weatherDescription} />

      <CardContent>
        <WeatherRow
          text={`Feels like: ${data.main.feels_like}\u00b0F`}
          icon={<WbSunnyIcon sx={{ color: "#FFA500" }} />}
        />
        <Divider sx={{ marginY: 1.5 }} />
        <WeatherRow
          text={`Temperature: ${data.main.temp}\u00b0F`}
          icon={<WbSunnyIcon sx={{ color: "#FFA500" }} />}
        />
        <Divider sx={{ marginY: 1.5 }} />
        <WeatherRow
          text={`Humidity: ${data.main.humidity}%`}
          icon={<WaterDropIcon color="primary" />}
        />
      </CardContent>
    </Card>
  );
};

interface WeatherRowProps {
  text: string;
  icon: React.ReactElement;
}
const WeatherRow: FC<WeatherRowProps> = ({ text, icon }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>{text}</Typography>
        {icon}
      </Box>
    </>
  );
};
