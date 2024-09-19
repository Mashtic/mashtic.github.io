// Inicializa el mapa y lo centra en una ubicación específica con un nivel de zoom
var map = L.map('map').setView([9.930311, -84.025333], 17); // Coordenadas de ejemplo (San José, Costa Rica)

// Añade el mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

fetch('GeoJson/casas.geojson')
    .then(response => response.json())
    .then(data => {
        // Agregar el contenido del GeoJSON al mapa
        L.geoJSON(data, {

            style: function (feature) {
                return {
                    color: "#dc7633",   // Border color
                    weight: 2,          // Border thickness
                    opacity: 1,
                    fillColor: "#edbb99", // Fill color for polygons
                    fillOpacity: 0.1     // Opacity of the fill
                };
            }
        }).addTo(map);
    });

    fetch('GeoJson/parques.geojson')
    .then(response => response.json())
    .then(data => {
        // Agregar el contenido del GeoJSON al mapa
        L.geoJSON(data, {

            style: function (feature) {
                return {
                    color: "#28b463",   // Border color
                    weight: 2,          // Border thickness
                    opacity: 1,
                    fillColor: "#abebc6", // Fill color for polygons
                    fillOpacity: 0.1     // Opacity of the fill
                };
            }
        }).addTo(map);
    });


    fetch('GeoJson/postes.geojson')
    .then(response => response.json())
    .then(data => {
        // Agregar el contenido del GeoJSON al mapa
        L.geoJSON(data).addTo(map);
    });


