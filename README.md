# World Info

## An NPM package which helps you get any Country's capital.

### There are 2 functions, Future functions will be added based on usage and necessity.

**getCapital** - Fetches the capital given a Country as a string input.

**getTimezones** - Fetches the UTC timezones given a Country as a string input. Returns a promise.

## Installation Instructions

`npm i world-info`

## How to use

`var worldInfo = require('world-info')\n`
`worldInfo.getCapital('India'))\n`
`worldInfo.getTimeZones('India').then(data => doWhateverWith(data))`
