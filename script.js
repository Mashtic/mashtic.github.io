// Inicializa el mapa y lo centra en una ubicación específica con un nivel de zoom
var map = L.map('map').setView([9.930311, -84.025333], 17); // Coordenadas de ejemplo (San José, Costa Rica)

// Añade el mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Ejemplo de añadir un lote (polígono) con GeoJSON
var lote1 = {
    "type": "Feature",
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [-84.0910, 9.9282],
                [-84.0915, 9.9285],
                [-84.0918, 9.9281],
                [-84.0910, 9.9282]
            ]
        ]
    },
    "properties": {
        "name": "Lote 1"
    }
};

// Añadir el lote al mapa como un polígono
L.geoJSON(lote1).addTo(map).bindPopup("Lote 1");

// Ejemplo de agregar un marcador para infraestructura (Escuela)
var schoolIcon = L.icon({
    iconUrl: 'https://example.com/school-icon.png', // URL del icono personalizado
    iconSize: [32, 32], // Tamaño del icono
    iconAnchor: [16, 32], // Punto de anclaje del icono
    popupAnchor: [0, -30] // Punto donde se abre el popup
});

// Añadir un marcador con el icono personalizado
L.marker([9.9285, -84.0910], {icon: schoolIcon}).addTo(map)
    .bindPopup("Escuela primaria");

// Ejemplo de añadir un río (línea)
var rio = [
    [9.9275, -84.0920],
    [9.9280, -84.0930],
    [9.9285, -84.0940]
];

// Añadir el río como una línea poligonal
L.polyline(rio, {color: 'blue'}).addTo(map).bindPopup("Río");

