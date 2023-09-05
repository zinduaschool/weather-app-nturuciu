
// Function to fetch weather data from an API
function getWeatherData(cityName) {
    const apiKey = '4df36853761bb7638757fe861a5f18fc';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const humidityElement = document.getElementById('humidity');
        const windElement = document.getElementById('wind');
        const rainElement = document.getElementById('rain');
        const sunElement = document.getElementById('sun');
  
        if (data.cod === 200) {
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;
           const rain = data.rain && data.rain['1h'] ? data.rain['1h'] : '0';
  
          humidityElement.innerHTML = `
            <img src="Images/humidity.png" alt="" width="100%">
            <p>Humidity</p>
            <p>${humidity}%</p>
          `;
  
          windElement.innerHTML = `
            <img src="Images/wind.png" alt="" width="100%">
            <p>Wind</p>
            <p>${windSpeed} m/s</p>
          `;
  
          rainElement.innerHTML = `
            <img src="Images/rainy.png" alt="" width="100%">
            <p>Rain</p>
            <p>${rain} mm</p>`
             ;
                    } 
        else {
          humidityElement.innerHTML = `<p>City not found. Please try again.</p>`;
          windElement.innerHTML = '';
          rainElement.innerHTML = '';
                  }
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  // Function to handle button click event
  function handleButtonClick() {
    const locationInput = document.getElementById('location');
    const cityName = locationInput.value.trim(); 
    getWeatherData(cityName);
    locationInput.value = ''; 
  }
  
  // Add event listener to the search button
  const searchButton = document.getElementById('search');
  searchButton.addEventListener('click', handleButtonClick);
  