export function getCurlForecast(humidity, temp) {

  if (humidity < 40 && temp < 20) {
    return {
      label: "Wash and Go Friendly",
      score: 9,
      tip: "Low humidity is your best friend today. Your curls will behave — enjoy it.",
      product: "Lightweight leave-in + curl cream",
      technique: "Praying hands, air dry",
      pack: "Nothing extra — you're good"
    };
  }
  else if (humidity >= 40 && humidity <= 60 && temp >= 15 && temp <= 25) {
    return {
      label: "Good Curl Day",
      score: 10,
      tip: "Let your hair down and let the curls do the talking. Conditions are perfect.",
      product: "Curl defining cream or light gel",
      technique: "Squish to condish, diffuse low",
      pack: "Your favorite claw clip"
    };
  }
  else if (humidity >= 60 && humidity <= 75) {
    return {
      label: "Diffuser Recommended",
      score: 6,
      tip: "Humidity is creeping up. Seal your cuticle with gel before it gets in.",
      product: "Strong hold gel over leave-in",
      technique: "Diffuse on low heat to seal",
      pack: "Travel-size gel, satin scrunchie"
    };
  }
  else if (humidity >= 75 && humidity <= 89 && temp > 25) {
    return {
      label: "Frizz Alert",
      score: 4,
      tip: "High porosity hair will absorb moisture from the air fast. Lock it out early.",
      product: "Heavy cream + anti-humidity gel cast",
      technique: "Praying hands + diffuse, don't touch",
      pack: "Spray bottle + extra gel"
    };
  }
  else {
    return {
      label: "Protective Style Day",
      score: 2,
      tip: "90%+ humidity will win. Save your curls the fight and rock a protective style.",
      product: "Moisturizing cream for scalp",
      technique: "Braid out, bun, or twist",
      pack: "Satin bonnet, edge control"
    };
  }
}