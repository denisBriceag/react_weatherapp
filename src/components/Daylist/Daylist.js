import React from "react";
import Day from "./Day/Day";
import moment from "moment";
import styles from "./Daylist.module.css";

const Daylist = (props) => {
  const { weather } = props;
  return (
    <div className={styles.daysforecast}>
      <Day
        weekDay={`${moment(
          weather.forecast?.forecastday[0].date,
          "YYYY-MM-DD"
        ).format("dddd")}`}
        date={moment(
          weather.forecast?.forecastday[0].date,
          "YYYY-MM-DD"
        ).format("MMMM Do")}
        icon={`${weather.forecast?.forecastday[0].day.condition.icon}`}
        temperature={`${Math.round(
          weather.forecast?.forecastday[0].day.maxtemp_c
        )}`}
        condition={weather.forecast?.forecastday[0].day.condition.text}
      />
      <Day
        weekDay={`${moment(
          weather.forecast?.forecastday[1].date,
          "YYYY-MM-DD"
        ).format("dddd")}`}
        date={moment(
          weather.forecast?.forecastday[1].date,
          "YYYY-MM-DD"
        ).format("MMMM Do")}
        icon={`${weather.forecast?.forecastday[1].day.condition.icon}`}
        temperature={`${Math.round(
          weather.forecast?.forecastday[1].day.maxtemp_c
        )}`}
        condition={weather.forecast?.forecastday[1].day.condition.text}
      />
      <Day
        weekDay={`${moment(
          weather.forecast?.forecastday[2].date,
          "YYYY-MM-DD"
        ).format("dddd")}`}
        date={moment(
          weather.forecast?.forecastday[2].date,
          "YYYY-MM-DD"
        ).format("MMMM Do")}
        icon={`${weather.forecast?.forecastday[2].day.condition.icon}`}
        temperature={`${Math.round(
          weather.forecast?.forecastday[2].day.maxtemp_c
        )}`}
        condition={weather.forecast?.forecastday[2].day.condition.text}
      />
    </div>
  );
};
export default Daylist;
