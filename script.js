const apiKey = '040bd439d6824dcb467d588d14f7ad12'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      document.getElementById('weatherResult').innerText = "City not found.";
      return;
    }

    const data = await response.json();
    const weather = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;

    document.getElementById('weatherResult').innerHTML = weather;
  } catch (error) {
    console.error(error);
    document.getElementById('weatherResult').innerText = "Error retrieving weather data.";
  }
}
