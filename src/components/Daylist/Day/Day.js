import React from "react";
import styles from "./Day.module.css";

const Day = (props) => {
  return (
    <div className={styles.day}>
      <h5>{props.weekDay}</h5>
      <p>{props.date}</p>
      <img src={props.icon} alt="cloudy" />
      <h5>{`${props.temperature}`} &deg;C </h5>
      <p>{props.condition}</p>
    </div>
  );
};

export default Day;
