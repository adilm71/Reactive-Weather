import React from "react";
import sunny from "../assets/Sunny.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import rainy from "../assets/Rainy.svg";

function WeatherCard({ data }) {
  function imageIcon(forecast) {
    switch (forecast) {
      case "Sunny":
        return sunny;
      case "Cloudy":
        return cloudy;
      case "Partly cloudy":
        return partlyCloudy;
      case "Rainy":
        return rainy;
      default:
        return sunny;
    }
  }
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={imageIcon(data.forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{data.city}</h3>
        <h5 className="card-text">{data.temperature}</h5>
        <h5 className="card-text">{data.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
module.exports = WeatherCard;
