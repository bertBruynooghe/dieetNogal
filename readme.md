# DieetNogal
PWA-to-be to calculate carbs of meals/snacks.

## TODO

* responsive styling
* express server
* hijacking submits in WebWorker
* couchdb support
* passport integration
* no javascript version


## Development

As service workers do not work with the file protocol on Chrome (the do seem to work on safari),
we need to start a webserver using `npx nodemon index.js` from the `express` folder.
This is not needed yet on the hosting platform.