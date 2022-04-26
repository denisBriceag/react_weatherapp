import React, { useState, useEffect } from "react";
import Daylist from "./components/Daylist/Daylist";
import Input from "./components/Input/Input";
import styles from "./App.module.css";

const weatherapi = {
  key: "4627c393128e4b82a0a154639222304",
  base: "http://api.weatherapi.com/v1/",
};

function App() {
  const [city, setCity] = useState("Chisinau");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (!city) {
      return;
    }

    fetch(
      `${weatherapi.base}forecast.json?key=${weatherapi.key}&q=${city}&days=5&aqi=no&alerts=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [city]);

  const handleCity = (city) => setCity(city);

  let content = <p className={styles.city}>Loading...</p>;

  if (weather) {
    content = (
      <p
        className={styles.city}
      >{`${weather?.location?.name}, ${weather?.location?.country}`}</p>
    );
  }

  return (
    <main className={styles.maincontainer}>
      <div className={styles.title}>
        <h1>3-Day Forecast</h1>
      </div>
      <strong>{content}</strong>
      {weather && <Daylist weather={weather} />}
      <Input handleCity={handleCity} />
    </main>
  );
}

export default App;
