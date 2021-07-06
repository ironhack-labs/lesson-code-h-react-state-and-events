import React from "react";
import WeatherWidget from "./WeatherWidget";

function WeatherForecast(props) {
  const unit = props.tempUnit;
  return (
    <div>
      <WeatherWidget
        city="Miami"
        icon="🟡"
        unit={unit}
        celsius={29}
        theme={props.theme}
      />
      <WeatherWidget city="Mexico City" icon="⛈️" unit={unit} celsius={17} />
      <WeatherWidget city="Berlin" icon="🌥️" unit={unit} celsius={20} />
      <WeatherWidget city="Barcelona" icon="🌤️" unit={unit} celsius={28} />
    </div>
  );
}

export default WeatherForecast;
