const axios = require('axios');

const getLugarLatLng = async (dir) => {

    
    const encodeUlr = encodeURI( dir  );

    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+"${encodeUlr}"?json=1`
    });

    const resp = await instance.get();
    
    if ( !resp ) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data; 
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}