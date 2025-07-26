# 🌤️ TescoWeather

TescoWeather is a single-page web application that displays a 5-day weather forecast for a selected city. Users can search for cities using autocomplete, see temperatures, and view a temperature trend graph. The application fetches data from the OpenWeatherMap API and formats it based on the user's browser locale.

## ⚙️ Tech Stack

- **React**
- **TypeScript**
- **MobX**
- **SCSS**
- **OpenWeatherMap API**
- **Recharts** (for chart rendering)
- **HTML5 / CSS3**

## 🔧 Features

- 🌍 City selection via autocomplete [OpenWeatherMap API](https://openweathermap.org/api/geocoding-api)
- 📅 5-day forecast including temperatures and weather icons
- 📈 Hourly temperature forecast displayed as a list or interactive graph
- 📍 Forecast based on user's current location (Geolocation API)
- 🕒 Localized date and time formatting
- ☁️ Integration with [OpenWeatherMap API](https://openweathermap.org/api)

## 📁 Project Structure

- **assets** – images, icons, and other static media
- **components** – reusable React components used throughout the application
- **constants** – project-wide constants such as URLs and API keys
- **hooks** – custom React hooks
- **store** – MobX stores for weather forecast and geolocation state
- **styles** – SCSS styles for the entire project
- **types** – TypeScript type definitions and interfaces
- **utils** – helper functions for formatting time, dates, and icons

## 🌐 Supported Browsers

- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge

## 🛠️ Getting Started

1. **Clone the repository**

    ```bash
    git clone https://github.com/hesrun/TescoWeather
    cd TescoWeather
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure environment variables**  
   Create a `.env` file in the project root:

    ```
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

5. Visit [http://localhost:5173](http://localhost:5173) to view the application.

---
