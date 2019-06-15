const capitals = require("./capitals.json");
const fetch = require("node-fetch");

var is200 = require("./helper");
var WorldInfo = function() {};

WorldInfo.prototype.getCapital = function(countryName) {
  for (var i in capitals) {
    if (capitals[i].country === countryName) return capitals[i].capital;
  }
};

//returns timezones of each country
WorldInfo.prototype.getTimeZones = async function(countryName) {
  var resp;
  var uri = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=True`;

  //return when promise is resolved only if status is 200
  let response = await fetch(uri).then(data => {
    return is200(data);
  });

  //if response is not null then return the timezones
  if (response != null) {
    resp = await response.json();
    return resp[0].timezones;
  } else return "Country not found";
};

//returns country flag as svg
WorldInfo.prototype.getFlag = async function(countryName) {
  var resp;
  var uri = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=True`;

  //return when promise is resolved only if status is 200
  let response = await fetch(uri).then(data => {
    return is200(data);
  });

  //if response is not null then return the timezones
  if (response != null) {
    resp = await response.json();
    return resp[0].flag;
  } else return "Country not found";
};

WorldInfo.prototype.getCurrency = async function(countryName) {
  var resp;
  var uri = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=True`;

  //return when promise is resolved only if status is 200
  let response = await fetch(uri).then(data => {
    return is200(data);
  });

  //if response is not null then return the timezones
  if (response != null) {
    resp = await response.json();
    return resp[0].currencies;
  } else return "Country not found";
};

//returns all the country codes which can be used in holidays module.
WorldInfo.prototype.getCountryCode = async function() {
  var uri = `https://kayaposoft.com/enrico/json/v2.0/?action=getSupportedCountries`;

  let response = await fetch(uri).then(data => {
    return is200(data);
  });
  if (response != null) {
    resp = await response.json();
    return resp;
  }
};

// takes in country code, year as required parameters, holidayType is optional and defaulted to public holiday. Other types are :
// `extra_working_day` , `observance` , `other_day` and `school_holiday`.
// returns a json object with holidays for that year
WorldInfo.prototype.getHolidaysForYear = async function(
  countryCode,
  year,
  holidayType = "public_holiday"
) {
  var uri = `https://kayaposoft.com/enrico/json/v2.0?action=getHolidaysForYear&country=${countryCode}&holidayType=${holidayType}&year=${year}`;

  let response = await fetch(uri).then(data => {
    return is200(data);
  });
  if (response != null) {
    resp = await response.json();
    return resp;
  }
};

//takes in countryCode and date as input parameters to return a JSON object with key `isPublicHoliday` and value `true|false`
WorldInfo.prototype.isPublicHoliday = async function(countryCode, date) {
  var uri = `https://kayaposoft.com/enrico/json/v2.0?action=isPublicHoliday&date=${date}&country=${countryCode}`;

  let response = await fetch(uri).then(data => {
    return is200(data);
  });
  if (response != null) {
    resp = await response.json();
    return resp;
  }
};

// takes in country code, year and month as required parameters, holidayType is optional and defaulted to public holiday. Other types are :
// `extra_working_day` , `observance` , `other_day` and `school_holiday`.
// returns a json object with holidays for that month
WorldInfo.prototype.getHolidaysForMonth = async function(
  countryCode,
  year,
  month,
  holidayType = "public_holiday"
) {
  var uri = `https://kayaposoft.com/enrico/json/v2.0?action=getHolidaysForMonth&country=${countryCode}&holidayType=${holidayType}&year=${year}&month=${month}`;

  let response = await fetch(uri).then(data => {
    return is200(data);
  });
  if (response != null) {
    resp = await response.json();
    return resp;
  }
};

// takes in country code and date as input parameters, returns a json object with key `isWorkDay` and value `true|false`
WorldInfo.prototype.isWorkDay = async function(countryCode, date) {
  var uri = `https://kayaposoft.com/enrico/json/v2.0?action=isWorkDay&date=${date}&country=${countryCode}`;

  let response = await fetch(uri).then(data => {
    return is200(data);
  });
  if (response != null) {
    resp = await response.json();
    return resp;
  }
};

module.exports = new WorldInfo();
