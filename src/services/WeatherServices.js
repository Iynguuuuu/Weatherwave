const API_KEY = '7665e1623166075bc167044ff3c8ee44'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (infoType, SearchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({ ...SearchParams, appid: API_KEY });

    return fetch(url)
                .then((res) => res.json())
                .then((data) => data);
 };

 export default getWeatherData;