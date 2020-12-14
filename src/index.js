//import function which gets city info from api
import { getCityInfoMetric, getCityInfoImperial } from './weather-api';

//function to set background 'tint' depending on how hot or cold it is
function setTint(temp) {
    //hot: #f43b1d
    //warm: #dbba1b
    //cool: #157dfe
    //cold: #2ad1eb

    if (temp >= 90) {
        document.querySelector('body').style.backgroundColor = '#f43b1d';
    } else if (temp >= 70) {
        document.querySelector('body').style.backgroundColor = '#dbba1b';
    } else if (temp >= 40) {
        document.querySelector('body').style.backgroundColor = '#157dfe';
    } else if (temp <= 39) {
        document.querySelector('body').style.backgroundColor = '#2ad1eb';
    }
}

//updates the degrees, feels like, and humidity metric display
function updateMetricDisplay(degree, feel, humid) {
    //elements that needs to be fed values for display
    const degrees_displayer = document.querySelector('.degrees-metric');
    const feels_displayer = document.querySelector('.feels-metric');
    const humid_displayer = document.querySelector('.humid-metric');

    //update display with values
    degrees_displayer.innerHTML = degree + '°';
    feels_displayer.innerHTML = 'Feels like: ' + feel + '°';
    humid_displayer.innerHTML = 'Humidity: ' + humid + '%';
}

//updates the degrees, feels like, and humidity imperial display
function updateImperialDisplay(degree, feel, humid) {
    //elements that needs to be fed values for display
    const degrees_displayer = document.querySelector('.degrees-imp');
    const feels_displayer = document.querySelector('.feels-imp');
    const humid_displayer = document.querySelector('.humid-imp');

    //update display with values
    degrees_displayer.innerHTML = degree + '°';
    feels_displayer.innerHTML = 'Feels like: ' + feel + '°';
    humid_displayer.innerHTML = 'Humidity: ' + humid + '%';
}

//fires when search is clicked
//gets weather data and displays it
async function handleSearch() {
    //get inputted city value
    const city_input = document.querySelector('#city-input').value;

    //get metric weather information for that value
    const data_metric = await getCityInfoMetric(city_input).catch((error) => {
        //incase no return from api
        alert('Check your city. Either misspelled or no data available.');
    });

    //only continues executing code if data is not undefined.
    if (data_metric != null) {
        //get imperial info
        const data_far = await getCityInfoImperial(city_input);

        //set city name
        const city_name = document.querySelector('.city-name');
        city_name.innerHTML = city_input;
        //set bg tint
        setTint(data_far[0]);
        //update display with the data
        updateMetricDisplay(data_metric[0], data_metric[1], data_metric[2]);
        updateImperialDisplay(data_far[0], data_far[1], data_far[2]);
    }
}

//when program first starts
//adds function to button onclick
async function setUp() {
    //set btn onclick
    const btn = document.querySelector('button');
    btn.onclick = handleSearch;

    //get inital data
    const data_metric = await getCityInfoMetric('Tempe');
    const data_far = await getCityInfoImperial('Tempe');

    //set bg tint
    setTint(data_far[0]);

    //update display with the data
    updateMetricDisplay(data_metric[0], data_metric[1], data_metric[2]);
    updateImperialDisplay(data_far[0], data_far[1], data_far[2]);
}

setUp();
