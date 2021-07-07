function WeatherWidget(props) {
  let temperature = props.celsius;
  if (props.unit === "F") temperature = temperature * 1.8 + 32;

  return (
    <div className="WeatherWidget">
      <span>{props.icon}</span>
      <h3>{props.city}</h3>
      <h2>
        {temperature} °{props.unit}
      </h2>
    </div>
  );
}

export default WeatherWidget;
