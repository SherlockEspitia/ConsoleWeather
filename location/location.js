const axios = require('axios');

const getLocationLatLng = async(dir) => {
    const encodedURL = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 1000,
        headers: {
            'X-RapidAPI-Key': 'ea49b1897emshb175face56edd6bp13f99ajsn38e2694662d7'
        }
    });

    const resp = await instance.get();



    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }


}

module.exports = {
    getLocationLatLng
}


/*const encodedURL = encodeURI(argv.direccion);
console.log(encodedURL);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    timeout: 1000,
    headers: {
        'X-RapidAPI-Key': 'ea49b1897emshb175face56edd6bp13f99ajsn38e2694662d7'
    }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('Error', err);
    })*/