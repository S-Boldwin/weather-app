# 🌤️ Weather App

A clean, responsive weather application that fetches real-time weather data using the OpenWeatherMap API.

![Weather App](https://img.shields.io/badge/status-active-success.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)
![API](https://img.shields.io/badge/API-OpenWeather-blue.svg)

## 🌟 Features

- 🌍 Search weather by city name
- 🌡️ Display current temperature in Celsius
- 💧 Show humidity levels
- 💨 Display wind speed
- 🖼️ Dynamic weather condition icons
- ⏰ Current date and time display
- ⚠️ Error handling for invalid cities
- 📱 Fully responsive design

## 🚀 Live Demo

[View Live Demo](https://s-boldwin.github.io/weather-app/) ✨

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6)** - Logic and API integration
- **Fetch API** - Asynchronous HTTP requests
- **OpenWeatherMap API** - Real-time weather data

## 🔑 API Setup

This app uses the OpenWeatherMap API. To run locally:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace `YOUR_API_KEY` in `app.js` (line 8):
```javascript
   const API_KEY = 'your_actual_api_key_here';
```
3. Note: API keys take 10-15 minutes to activate after signup

## 💻 How to Use

1. Clone this repository:
```bash
   git clone https://github.com/S-Boldwin/weather-app.git
```

2. Open `index.html` in your browser

3. Enter any city name and click Search!

4. View real-time weather information

## 📂 Project Structure
```
weather-app/
├── index.html      # Main HTML structure
├── app.js          # JavaScript logic & API calls
├── style.css       # Styling and animations
└── README.md       # Project documentation
```

## 🎯 What I Learned

Building this project taught me:

### JavaScript Concepts
- **Fetch API** - Making HTTP requests to external APIs
- **Promises** - Handling asynchronous operations with `.then()`
- **Error Handling** - Using `.catch()` for graceful error management
- **JSON Parsing** - Converting API responses with `response.json()`
- **Template Literals** - Creating dynamic strings with backticks
- **Async JavaScript** - Understanding non-blocking code execution

### API Integration
- Working with REST APIs
- API authentication using keys
- Reading API documentation
- Handling HTTP status codes
- Rate limiting and quotas

### DOM Manipulation
- Dynamic content updates
- CSS class manipulation
- Event listeners for user interactions
- Conditional rendering based on data

## 🧠 Key Code Concepts

### Understanding fetch()
```javascript
fetch(url)
  .then(response => response.json())  // Parse JSON
  .then(data => displayWeather(data))  // Use the data
  .catch(error => showError(error));   // Handle errors
```

**Why this works:**
- `fetch()` is asynchronous (doesn't block other code)
- Returns a Promise that resolves when response arrives
- `.then()` chains handle the response step by step
- `.catch()` catches any errors in the chain

### API URL Construction
```javascript
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
```
- Uses template literals for dynamic URLs
- `q=${city}` - Query parameter for city name
- `units=metric` - Get temperature in Celsius

## 🔮 Future Improvements

- [ ] Add 5-day weather forecast
- [ ] Implement geolocation to auto-detect user's city
- [ ] Save last searched city in localStorage
- [ ] Add weather alerts and warnings
- [ ] Implement dark mode toggle
- [ ] Show additional data (sunrise, sunset, UV index, pressure)
- [ ] Add weather-based background images
- [ ] Support for multiple temperature units (°F/°C toggle)

## 🐛 Known Issues

- API key requires 10-15 minutes activation time after signup
- Some city names may need country code for accuracy (e.g., "London,UK")

## 👨‍💻 Author

**Swithin Boldwin**
- Email: swithinparangath23@gmail.com
- GitHub: [@S-Boldwin](https://github.com/S-Boldwin)

## 🙏 Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Weather icons from OpenWeatherMap

## 📝 License

This project is open source and available under the MIT License.

---

⭐ If you found this helpful, please give it a star!

## 📧 Contact

Feel free to reach out if you have questions or suggestions!
