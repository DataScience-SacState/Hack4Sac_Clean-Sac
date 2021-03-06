var API_KEY = "AIzaSyBtYUGKLK0fn0sGHMkaKPlIJBdsFyaKu9A";

var map, heatmap;

var dummyData = [];


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 38.5, lng: -121.4},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
 	heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
 	heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
	dummyData = [];
	var lat, lng;
	var latMin, latMax, lngMin, lngMax;

	latMin = 38.5246671;
	latMax = 38.5308446;
	lngMin = -121.43102645874022;
	lngMax = -121.43754959106444;

	for(var i = 0; i < 100; i++) {

		lat = Math.random()* (latMax - latMin) + latMin;
		lng = Math.random()* (lngMax - lngMin) + lngMin;
		dummyData.push({
			"lat": lat,
			"lng": lng
		})
	}
	return dummyData;
}