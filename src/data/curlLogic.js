export function getCurlForecast(humidity, temp) {
  let result = "Diffuser recommended";

  if (humidity < 40 && temp < 20)
    result = "Wash and go friendly";
  else if (humidity >= 40 && humidity <= 60 && temp >= 15 && temp <= 25)
    result = "Good curl day";
  else if (humidity >= 60 && humidity <= 75)
    result = "Diffuser recommended";
  else if (humidity >= 75 && humidity <= 89 && temp > 25)
    result = "Frizz alert";
  else if (humidity > 90)
    result = "Protective style day";

  return result;
}