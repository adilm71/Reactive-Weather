import React, { useState } from "react";
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import cities from "./data.js";
import Form from "./components/Form";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form setLocation={setLocation} setMessage={setMessage} />
      <Location data={cities} location={location} setMessage={setMessage} />
      {message ? <div>{message}</div> : ""}
      <div className="app">
        {cities.map((city) => (
          <WeatherCard data={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
