const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciduad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion



const getInfo = async( direccion ) => {


    try {
        const coords = await lugar.getLugarLatLng( direccion );
        const temp = await clima.getClima( coords.lat, coords.lng );
        return `el clima de ${ coords.direccion } es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );