# World Info

## An NPM package which helps you get any information of a Country.

### There are 4 functions, Future functions will be added based on usage and necessity.

**getCapital** - Fetches the capital given a Country as a string input.

**getTimezones** - Fetches the UTC timezones given a Country as a string input. Returns a promise.

**getFlag** - Fetches a SVG image given a Country as string input.

**getCurrency** - Fetches the Country's currency code, currency name and currency symbol given a Country as string input. Returns a json array.

## Installation Instructions

`npm i world-info`

## How to use

`var worldInfo = require('world-info')`  
`worldInfo.getCapital('India')`  
`worldInfo.getTimeZones('India').then(data => doWhateverWith(data))`
`worldInfo.getFlag('India').then(data => doWhateverWith(data))`  
`worldInfo.getCurrency('India').then(data => doWhateverWith(data))`
