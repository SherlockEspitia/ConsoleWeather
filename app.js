const location = require('./location/location');
const weather = require('./weather/weather');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

//location.getLocationLatLng(argv.direccion)
//  .then(console.log)

//weather.getWeather(75, 75).then(console.log).catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await location.getLocationLatLng(direccion);
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

getInfo(argv.direccion).then(console.log).catch(console.log);