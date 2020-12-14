//import function which gets city info from api
import { getCityInfo } from './weather-api';

//fires when search is clicked
//gets weather data and displays it
async function handleSearch() {
    const city_input = document.querySelector('#city-input').value;
    const data = await getCityInfo(city_input);
    console.log(data);
}

//when program first starts
//adds function to button onclick
function setUp() {
    const btn = document.querySelector('button');
    btn.onclick = handleSearch;
}

setUp();
