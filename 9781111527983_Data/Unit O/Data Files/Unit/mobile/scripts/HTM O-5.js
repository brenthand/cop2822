  /* calculateDistance() function adapted from 
   * latitude/longitude spherical geodesy formulae & scripts
   * (c) Chris Veness 2002-2010
   * www.movable-type.co.uk/scripts/latlong.html */

function calculateDistance(lat2, lon2) {
  var R = 3959; // radius of Earth in miles
  var lat1 = 47.3193057;
  var lon1 = -93.2895824;
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad(); 
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = Math.round(R * c);
  return d;
}

Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}