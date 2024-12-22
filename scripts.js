// Initialize fullPage.js
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  normalScrollElements: '#map', // Ensure map interactions work smoothly
});

// Initialize the map
const map = L.map('map').setView([54.526, 15.2551], 4); // Centered on Europe

// Add a tile layer (background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Country data (translated into English)
const countryData = {
  "Finland": 78.4,
  "Spain": 3.7,
  "Sweden": 3.6,
  "Greece": 2.4,
  "Norway": 2.1,
  "Poland": 1.8,
  "Netherlands": 1.5,
  "France": 1.2,
  "Estonia": 1.2,
  "Croatia": 0.9,
  "Others": 3.4,
};

// Define GeoJSON for the countries
L.geoJSON(europeGeoJSON, {
  style: feature => ({
    color: 'pink',
    weight: 1,
    fillOpacity: 0.8,
  }),
  onEachFeature: (feature, layer) => {
    const countryName = feature.properties.name;
    const viewersPercentage = countryData[countryName] || 0;

    // Add tooltip for each country
    layer.bindTooltip(`${countryName}: ${viewersPercentage}% viewers`);

    // Highlight effect on hover
    layer.on('mouseover', () => {
      layer.setStyle({
        fillOpacity: 1,
      });
    });

    layer.on('mouseout', () => {
      layer.setStyle({
        fillOpacity: 0.8,
      });
    });
  },
}).addTo(map);
