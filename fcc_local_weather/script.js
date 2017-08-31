/*global $ navigator*/
$(document).ready(function() {
var long;
var lat;
navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;

var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long;

$.getJSON(api, function(data) {
  var weatherType = data.weather[0].description;
  var cTemp = (data.main.temp).toFixed(2) + "°C";
  var fTemp = ((data.main.temp * (9/5) + 32).toFixed(2)) + "°F";
  var tempSwap = true
  var city = data.name;
  var icon = data.weather[0].icon;

  $("#icon").prepend('<img src=' + icon + '>');
  $("#city").html(city);
  $("#weatherType").html(weatherType);
  $("#temp").html(fTemp);

  $("#temp").click(function(){
    if (tempSwap === true) {
      $("#temp").html(fTemp);
      tempSwap = false;
    }else{
      $("#temp").html(cTemp);
      tempSwap = true;
    }
  })

});

});

});