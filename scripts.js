// OpenWeatherMap API Key
const apiKey = '409c88730834fe03a454e882b25bd26c';  // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

// Latitude and Longitude for all cities
const cities = {
    delhi: { lat: 28.6139, lon: 77.2090 },
    mumbai: { lat: 19.0760, lon: 72.8777 },
    visakhapatnam: { lat: 17.6868, lon: 83.2185 },
    itanagar: { lat: 27.0844, lon: 93.6053 },
    guwahati: { lat: 26.1445, lon: 91.7362 },
    patna: { lat: 25.5941, lon: 85.1376 },
    chandigarh: { lat: 30.7333, lon: 76.7794 },
    raipur: { lat: 21.2514, lon: 81.6296 },
    panaji: { lat: 15.4909, lon: 73.8278 },
    ahmedabad: { lat: 23.0225, lon: 72.5714 },
    gurugram: { lat: 28.4595, lon: 77.0266 },
    shimla: { lat: 31.1048, lon: 77.1734 },
    srinagar: { lat: 34.0837, lon: 74.7973 },
    ranchi: { lat: 23.3441, lon: 85.3096 },
    bengaluru: { lat: 12.9716, lon: 77.5946 },
    kozhikode: { lat: 11.2588, lon: 75.7804 },
    bhopal: { lat: 23.2599, lon: 77.4126 },
    imphal: { lat: 24.8170, lon: 93.9368 },
    aizawl: { lat: 23.7271, lon: 92.7176 },
    bhubaneshwar: { lat: 20.2961, lon: 85.8245 },
    jaisalmer: { lat: 26.9157, lon: 70.9083 },
    gangtok: { lat: 27.3389, lon: 88.6065 },
    hyderabad: { lat: 17.3850, lon: 78.4867 },
    varanasi: { lat: 25.3176, lon: 82.9739 },
    haridwar: { lat: 29.9457, lon: 78.1642 },
    darjeeling: { lat: 27.0360, lon: 88.2627 }
};

// Function to fetch AQI data from OpenWeatherMap API
// Function to fetch AQI data from OpenWeatherMap API
// Function to fetch AQI data from OpenWeatherMap API
function getAQIData(city, lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const aqi = data.list[0].main.aqi;
            let healthEffect;
            let bgColor;

            // Determine health effects and background color based on AQI
            switch (aqi) {
                case 1:
                    healthEffect = "Good";
                    bgColor = "green";
                    break;
                case 2:
                    healthEffect = "Fair";
                    bgColor = "yellow";
                    break;
                case 3:
                    healthEffect = "Moderate";
                    bgColor = "orange";
                    break;
                case 4:
                    healthEffect = "Poor";
                    bgColor = "red";
                    break;
                case 5:
                    healthEffect = "Very Poor";
                    bgColor = "purple";
                    break;
            }
            
            // Update AQI and health effect on the table
            const aqiCell = document.getElementById(`${city}-aqi`);
            const healthCell = document.getElementById(`${city}-health`);

            aqiCell.innerText = aqi;
            healthCell.innerText = healthEffect;

            // Set background color of the AQI and Health Concern columns
            aqiCell.style.backgroundColor = bgColor;
            healthCell.style.backgroundColor = bgColor;
            
           

            // Optionally, set the text color to contrast with the background
            aqiCell.style.color = "white";
            healthCell.style.color = "white";
        })
        .catch(error => {
            console.error("Error fetching AQI data:", error);
        });
}



// Loop through each city and fetch AQI data
Object.keys(cities).forEach(city => {
    const { lat, lon } = cities[city];
    getAQIData(city, lat, lon);
});



