  /* calculateDistance() function adapted from 
   * latitude/longitude spherical geodesy formulae & scripts
   * (c) Chris Veness 2002-2010
   * www.movable-type.co.uk/scripts/latlong.html */

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6378.1; // radius of Earth in km
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad(); 
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = Math.round(R * c * 10)/10;
  return d;
}

Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}

window.onload = function() {
  navigator.geolocation.getCurrentPosition (function (position) {
    document.getElementById ('geo1').style.display = 'inline';
    document.getElementById ('geo2').style.display = 'inline';
    document.getElementById ('geo3').style.display = 'inline';
    document.getElementById ('geo4').style.display = 'inline';
    document.getElementById ('distance1').innerHTML =
      calculateDistance(37.781637, -122.425718, position.coords.latitude, position.coords.longitude);
    document.getElementById ('distance2').innerHTML =
      calculateDistance(37.781162, -122.41868, position.coords.latitude, position.coords.longitude);
    document.getElementById ('distance3').innerHTML =
      calculateDistance(37.780806, -122.413208, position.coords.latitude, position.coords.longitude);
    document.getElementById ('distance4').innerHTML =
      calculateDistance(37.784908, -122.407691, position.coords.latitude, position.coords.longitude);
  });
};