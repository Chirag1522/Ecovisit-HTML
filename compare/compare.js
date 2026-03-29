// Function to fetch AQI data from the JSON file and populate the table
fetch('aqi_data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);  // Logging data to check the structure
        populateAQITable(data.states);  // Pass the 'states' array to the table population function
    })
    .catch(error => console.error('Error fetching the AQI data:', error));

// Function to populate the AQI table with state-wise AQI data
function populateAQITable(states) {
    const tableBody = document.getElementById("aqi-table-body");
    tableBody.innerHTML = ''; // Clear any existing table data

    // Loop through each state and create rows in the table
    states.forEach(state => {
        const row = document.createElement("tr");

        // Create a cell for the state name
        const stateCell = document.createElement("td");
        stateCell.textContent = state.name;
        row.appendChild(stateCell);

        // Loop through the AQI array for each month and create cells
        state.aqi.forEach(aqiValue => {
            const aqiCell = document.createElement("td");
            aqiCell.textContent = aqiValue;

            // Apply background color based on the AQI scale
            if (aqiValue <= 50) {
                aqiCell.style.backgroundColor = 'green';  // Good
                aqiCell.style.color = 'white';
            } else if (aqiValue <= 100) {
                aqiCell.style.backgroundColor = 'yellow';  // Moderate
                aqiCell.style.color = 'black';
            } else if (aqiValue <= 150) {
                aqiCell.style.backgroundColor = 'orange';  // Unhealthy for sensitive groups
                aqiCell.style.color = 'white';
            } else if (aqiValue <= 200) {
                aqiCell.style.backgroundColor = 'red';  // Unhealthy
                aqiCell.style.color = 'white';
            } else if (aqiValue <= 300) {
                aqiCell.style.backgroundColor = 'purple';  // Very Unhealthy
                aqiCell.style.color = 'white';
            } else {
                aqiCell.style.backgroundColor = 'maroon';  // Hazardous
                aqiCell.style.color = 'white';
            }

            row.appendChild(aqiCell);  // Append each AQI cell to the row
        });

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}
