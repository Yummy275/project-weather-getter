//function which will return the temp, feels, and humidity of a given city using API
async function getCityInfoMetric(city) {
    //create var holds API url
    const weather_url_metric =
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=2587cd761c971a43631549e5e96f55cd&units=metric';
    //gets data
    const response_metric = await fetch(weather_url_metric);
    //converts JSON data to an object
    const data_metric = await response_metric.json();
    //stores temp from data
    const city_info_metric = [
        Math.round(data_metric.main.temp),
        Math.round(data_metric.main.feels_like),
        data_metric.main.humidity,
    ];
    return city_info_metric;
}

async function getCityInfoImperial(city) {
    const weather_url_imperial =
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=2587cd761c971a43631549e5e96f55cd&units=imperial';
    //gets data
    const response_imperial = await fetch(weather_url_imperial);
    //converts JSON data to an object
    const data_imperial = await response_imperial.json();
    //stores temp from data
    const city_info_imperial = [
        Math.round(data_imperial.main.temp),
        Math.round(data_imperial.main.feels_like),
        data_imperial.main.humidity,
    ];
    return city_info_imperial;
}

export { getCityInfoMetric, getCityInfoImperial };
