# 🌀 Raíz Rizada — Curly Hair Weather Forecast

A weather app built for curly girls. Search any city and get a real-time curl forecast based on humidity and temperature — no more guessing if today is a wash-and-go or a protective style day.

**[Live Demo](https://curly-weather-forcast.vercel.app)** | Built with React + Vite | Deployed on Vercel

---

## About

Standard weather apps tell you temperature and humidity. Raíz Rizada tells you what that actually means for your curls. Built for 3B high porosity hair as a baseline, with plans to expand to personalized profiles based on curl type and porosity.

---

## Features

- Search any city worldwide for real-time weather data
- Curl forecast based on humidity + temperature
- 5 forecast results: Good Curl Day, Wash and Go Friendly, Diffuser Recommended, Frizz Alert, Protective Style Day
- Error handling for invalid city names with helpful guidance
- Enter key support for faster searching
- Responsive dark theme UI
- Deployed on Vercel

---

## Curl Forecast Logic

| Result | Condition |
|--------|-----------|
| 🌟 Wash and Go Friendly | Humidity < 40%, Temp < 20°C |
| ✅ Good Curl Day | Humidity 40–60%, Temp 15–25°C |
| 💨 Diffuser Recommended | Humidity 60–75% |
| ⚠️ Frizz Alert | Humidity 75–89%, Temp > 25°C |
| 🛡️ Protective Style Day | Humidity > 90% |

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 |
| Build Tool | Vite |
| Weather Data | OpenWeatherMap API |
| Styling | CSS3 (custom) |
| Deployment | Vercel |
| Version Control | GitHub |

---

## React Concepts Used

- Functional components and props
- `useState` for state management
- `async/await` for API calls
- Conditional rendering
- Component-driven architecture
- Environment variables for API key security

---

## Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx       # Location input and search logic
│   ├── weatherDisplay.jsx  # Weather data display
│   └── CurlForecast.jsx    # Curl forecast result display
├── data/
│   └── curlLogic.js        # Forecast logic based on humidity + temp
├── App.jsx                 # Root component, API call, state management
└── main.jsx                # Entry point
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Eli-coding/curly_weatherForcast.git

# Install dependencies
cd curly_weatherForcast
npm install

# Add your OpenWeatherMap API key
# Create a .env file in the root:
VITE_WEATHER_API_KEY=your_api_key_here

# Run locally
npm run dev
```

Get a free API key at [openweathermap.org](https://openweathermap.org/api)

---

## Roadmap

- [ ] Hair type quiz (curl pattern + porosity)
- [ ] Personalized forecast per hair profile
- [ ] UV index integration
- [ ] Product recommendations by budget tier
- [ ] Bilingual UI (English / Spanish)
- [ ] Travel mode with destination forecast

---

## Author

**Elizabeth Rodriguez**
[GitHub](https://github.com/Eli-coding) · [LinkedIn](https://linkedin.com/in/elizabeth-rodriguez-cardona)
