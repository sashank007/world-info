# World Info

## An NPM package which helps you get any information of any Country.

### There are 2 modules in this package. Future functions/modules will be added based on usage and necessity.

### The first module is the General module with the following functions:

**getCapital** - Fetches the capital given a Country as a string input.

**getTimezones** - Fetches the UTC timezones given a Country as a string input. Returns a promise.

**getFlag** - Fetches a SVG image given a Country as string input.

**getCurrency** - Fetches the Country's currency code, currency name and currency symbol given a Country as string input. Returns a json array.

### The second module is the Holiday Calendar module with the following functions:

**getCountryCode** - Fetches the list of countries and the `country_codes` eligible to be used under this module along with the `holiday_type`.  

**getHolidaysForYear** - Fetches a JSON object with a list of holidays for a given `countryCode` and `year`. The default `holidayType` is `public_holiday`.

**getHolidaysForMonth** - Fetches a JSON object with a list of holidays for a given `countryCode`, `year` and `month`. The default `holidayType` is `public_holiday`.  

**isPublicHoliday** - Fetches JSON object with key `isPublicHoliday` and value `true|false` when given `countryCode` and `date` as input parameters.  

**isWorkDay** - Fetches a JSON object with key `isWorkDay` and value `true|false` when given `countryCode` and `date` as input parameters.  

#### Following are the input parameters description:

**countryCode** - [ISO 3166-1 alpha-3 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) or [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)  
**holidayType** -
* all - all holiday types  
* public_holiday - public holidays  
* observance - observances, not a public holidays  
* school_holiday - school holidays  
* other_day - other important days e.g. Mother's day, Father's day etc  
* extra_working_day - extra working days. This day takes place mostly on Saturday or Sunday and is substituted for extra public holiday.  
* date - Date in format dd-mm-yyyy  

## Installation Instructions

`npm i world-info`

## How to use

`var worldInfo = require('world-info')`  
`worldInfo.getCapital('India')`  
`worldInfo.getTimeZones('India').then(data => doWhateverWith(data))`  
`worldInfo.getFlag('India').then(data => doWhateverWith(data))`  
`worldInfo.getCurrency('India').then(data => doWhateverWith(data))`  
`worldInfo.getHolidaysForMonth('gbr','2019','1').then(data=>doWhateverWith(data))`
