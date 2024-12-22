// Initialize fullPage.js
new fullpage('#fullpage', {
  autoScrolling: true, // Enables smooth auto-scrolling
  navigation: true,    // Adds navigation dots
  scrollingSpeed: 700, // Adjust scrolling speed
  fitToSection: true,  // Ensures sections fit the viewport
  normalScrollElements: '#map', // Allow interactions within the map
});

// Initialize the map
const map = L.map('map').setView([54.526, 15.2551], 4); // Centered on Europe

// Add a tile layer (background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Use the GeoJSON data and viewers' percentages
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
