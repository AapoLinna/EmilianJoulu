// Country percentages
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

// GeoJSON data for Europe (simplified example)
const europeGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Finland" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[24.0, 60.0], [25.0, 60.0], [25.0, 61.0], [24.0, 61.0], [24.0, 60.0]]] // Simplified
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "Spain" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[0.0, 40.0], [1.0, 40.0], [1.0, 41.0], [0.0, 41.0], [0.0, 40.0]]] // Simplified
      }
    }
    // Add more countries here
  ]
};
