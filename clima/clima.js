const axios = require('axios');


// ad1a77bef6fab9d64a426272eb95161d
const getClima = async (lat,  lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=ad1a77bef6fab9d64a426272eb95161d&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}