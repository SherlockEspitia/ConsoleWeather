const axios = require('axios');

const getWeather = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e7e18b46a640f07252b078838b48cad0&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}