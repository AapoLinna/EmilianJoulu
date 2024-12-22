// Initialize fullPage.js
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  scrollingSpeed: 700,
  fitToSection: true,
  normalScrollElements: '#map',
});

// Initialize the map
document.addEventListener("DOMContentLoaded", () => {
  const map = L.map('map').setView([54.526, 15.2551], 4); // Centered on Europe

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  // Add GeoJSON layer
  L.geoJSON(europeGeoJSON, {
    style: feature => ({
      color: 'pink',
      weight: 1,
      fillOpacity: 0.8,
    }),
    onEachFeature: (feature, layer) => {
      const countryName = feature.properties.name;
      const viewersPercentage = countryData[countryName] || 0;

      layer.bindTooltip(`${countryName}: ${viewersPercentage}% viewers`);
    },
  }).addTo(map);
});
