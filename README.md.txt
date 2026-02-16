# 🌤️ Weather App

A clean, responsive weather application that fetches real-time weather data using the OpenWeatherMap API.

![Weather App](https://img.shields.io/badge/status-active-success.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)
![API](https://img.shields.io/badge/API-OpenWeather-blue.svg)

## 🌟 Features

- 🌍 Search weather by city name
- 🌡️ Display current temperature
- 💧 Show humidity levels
- 💨 Display wind speed
- 🖼️ Weather condition icons
- ⏰ Current date and time
- ⚠️ Error handling for invalid cities
- 📱 Responsive design

## 🚀 Live Demo

[View Live Demo](#) *(will add after deployment)*

## 📸 Screenshots

*(Add screenshot here after deployment)*

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling & Animations
- **JavaScript (ES6)** - Logic
- **Fetch API** - HTTP requests
- **OpenWeatherMap API** - Weather data

## 🔑 API Setup

This app uses the OpenWeatherMap API. To run locally:

1. Get free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace `YOUR_API_KEY` in `app.js`:
```javascript
   const API_KEY = 'your_actual_api_key_here';
```

## 💻 How to Use

1. Clone this repository:
```bash
   git clone https://github.com/YOUR_USERNAME/weather-app.git
```

2. Open `index.html` in your browser

3. Enter a city name and click Search!

## 📂 Project Structure
```
weather-app/
├── index.html      # Main HTML file
├── app.js          # JavaScript logic & API calls
├── style.css       # Styling
└── README.md       # Documentation
```

## 🎯 What I Learned

Building this project taught me:
- **Fetch API** - Making HTTP requests
- **Promises** - Handling async operations with `.then()`
- **Error Handling** - Using `.catch()` for errors
- **API Integration** - Working with external APIs
- **JSON Parsing** - Converting API responses
- **Template Literals** - Dynamic string creation
- **DOM Manipulation** - Updating UI dynamically

## 🧠 Key Concepts

### Understanding fetch()
```javascript
fetch(url)
  .then(response => response.json())  // Convert to JavaScript object
  .then(data => displayWeather(data))  // Use the data
  .catch(error => handleError(error)); // Handle errors
```

**Why this works:**
- `fetch()` is asynchronous (doesn't block code)
- Returns a Promise
- `.then()` runs when data arrives
- `.catch()` runs if anything goes wrong

## 🔮 Future Improvements

- [ ] Add 5-day forecast
- [ ] Add geolocation to detect user's location
- [ ] Save last searched city
- [ ] Add weather alerts
- [ ] Add dark mode
- [ ] Add more weather details (sunrise, sunset, pressure)

## 👨‍💻 Author

**Swithin Parangath**
- Email: swithinparangath23@gmail.com
- GitHub: [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)

## 🙏 Credits

- Weather data from [OpenWeatherMap](https://openweathermap.org/)
- Icons from OpenWeatherMap

## 📝 License

This project is open source and available under the MIT License.

---

⭐ If you found this helpful, please give it a star!

## 🐛 Known Issues

- API key needs to be activated (takes 10-15 minutes after signup)
- Search is case-sensitive for some cities

## 📧 Contact

Feel free to reach out if you have questions or suggestions!


