// Country percentages
const countryData = {
  "Finland": 78.4,
  "Spain": 3.7,
};

// Simple GeoJSON for testing
const europeGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Finland" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[24.0, 60.0], [25.0, 60.0], [25.0, 61.0], [24.0, 61.0], [24.0, 60.0]]],
      },
    },
    {
      "type": "Feature",
      "properties": { "name": "Spain" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[0.0, 40.0], [1.0, 40.0], [1.0, 41.0], [0.0, 41.0], [0.0, 40.0]]],
      },
    },
  ],
};
