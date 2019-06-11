const capitals = require("./capitals.json");
const fetch = require("node-fetch");

var WorldInfo = function() {};

WorldInfo.prototype.getCapital = function(countryName) {
  for (var i in capitals) {
    if (capitals[i].country === countryName) return capitals[i].capital;
  }
};

WorldInfo.prototype.getTimeZones = async function(countryName) {
  var timeZones;
  var uri = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=True`;

  //return when promise is resolved only if status is 200
  let response = await fetch(uri).then(data => {
    return is200(data);
  });

  //if response is not null then return the timezones
  if (response != null) {
    timeZones = await response.json();
    return timeZones[0].timezones;
  } else return "Country not found";
};

function is200(data) {
  if (data.status == "200") {
    return data;
  } else return null;
}

module.exports = new WorldInfo();
