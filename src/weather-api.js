//function which will return the temp, feels, and humidity of a given city using API
async function getCityInfo(city) {
    //create var holds API url
    const weather_url =
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=2587cd761c971a43631549e5e96f55cd&units=metric';
    //gets data
    const response = await fetch(weather_url);
    //converts JSON data to an object
    const data = await response.json();
    //stores temp from data
    const info = [data.main.temp, data.main.feels_like, data.main.humidity];
    return info;
}

export { getCityInfo };
