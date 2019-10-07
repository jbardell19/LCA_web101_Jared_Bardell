'use strict';

$(document).ready(function() {
  let color = 'black';
  $('.column').click(function() {
    $(this).prepend(`<div class="disc ${color}"></div>`);
    if (color === 'red') {
      color = 'black';
    } else {
      color = 'red';
    }
  });
});

var myLocation = document.getElementById("my-coordinates");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition);
  } else {
    myLocation.innerHTML = "Not available";
  }
}

function displayPosition(position) {
  myLocation.innerHTML =
    "Longitude: " +
    position.coords.longitude +
    " Latitude: " +
    position.coords.latitude;
}