function initMap(){
	var mapDiv= document.getElementById('map');
	var position1= { lat:40.739714, lng: -73.840785}
	var map = new google.maps.Map(mapDiv, {
		center: position1,
		zoom: 16
	})
	var marker = new google.maps.Marker({
    position: position1,
    map: map,
    title: 'Hello World!'
  });
}