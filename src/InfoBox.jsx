import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ThunderstormSharpIcon from "@mui/icons-material/ThunderstormSharp";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import SunnyIcon from "@mui/icons-material/Sunny";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://static.vecteezy.com/system/resources/thumbnails/033/645/252/small_2x/drizzle-rainy-day-in-autumn-background-and-wallpaper-generative-ai-photo.jpg";

  const HOT_URL =
    "https://cleanwater.org/sites/default/files/images/blog/ma-extreme%20heat-sun-blog%20post.jpg";
  const COLD_URL =
    "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
  const RAIN_URL =
    "https://static.vecteezy.com/system/resources/previews/029/771/613/large_2x/epicgraphy-shot-of-rainy-season-background-enjoying-nature-rainfall-and-happy-life-concept-generative-ai-free-photo.jpeg";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>

            {info.humidity > 80 ? (
              <ThunderstormSharpIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitTwoToneIcon />
            )}

            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather} </i> and feels
                like {""} {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
