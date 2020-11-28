let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3282517940169cc2ec517af5aa5f93e2';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    let currentCondition = weatherData.weather[0].main;
    let temp = Math.round(weatherData.main.temp, 0);
    let humidity = Math.round(weatherData.main.humidity, 0);
    let windspeed = weatherData.wind.speed;
    let imageConditions = 'https://openweathermap.org/weather-conditions';


    document.getElementById('current-weather').innerHTML = currentCondition;
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('humid').innerHTML = humidity;
    document.getElementById('windspeed').innerHTML = windspeed;
    document.getElementById('windChill').innerHTML = getWindChill();

    document.getElementById('conditions-icon').setAttribute('src', imageConditions + weatherData.weather[0].icon + '.png');
    document.getElementById('conditions-icon').setAttribute('alt', weatherData.weather[0].description);
}

function getWindChill() {
    let tempF = parseInt(document.getElementById('temp').innerHTML);
    let speed = parseInt(document.getElementById('windspeed').innerHTML);
    result = windChill(tempF, speed);
    return result;
}

function windChill(tempF, speed) {
    let windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    let soCold = windChillFactor.toFixed(0);

    return soCold;
}

let forecastRequest = new XMLHttpRequest();
let forecastApiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=3282517940169cc2ec517af5aa5f93e2';
forecastRequest.open('Get', forecastApiURLstring, true);
forecastRequest.send();


function findDayOfWeek(apiDay) {
    let dayDate = new Date(apiDay);
    let day = dayDate.getDay();
    let dayOfWeek;
    switch (day) {
        case 0:
            dayOfWeek = 'Sunday';
            break;
        case 1:
            dayOfWeek = 'Monday';
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            break;
        case 3:
            dayOfWeek = 'Wednesday';
            break;
        case 4:
            dayOfWeek = 'Thursday';
            break;
        case 5:
            dayOfWeek = 'Friday';
            break;
        case 6:
            dayOfWeek = 'Saturday';
            break;
        default:
            break;
    }
    return dayOfWeek;
}


forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    let imageWeather = 'https://openweathermap.org/img/w/';
    let forecastArray = forecastData.list;
    let dayOne, dayTwo, dayThree, dayFour, dayFive;
    let z = 0;

    for (let i = 0; i < forecastArray.length; i++) {
        let x = forecastData.list[i].dt_txt;
        let y = x.includes('18:00:00');
        if (y == true) {
            switch (z) {
                case 0:
                    dayOne = forecastData.list[i];
                    break;
                case 1:
                    dayTwo = forecastData.list[i];
                    break;
                case 2:
                    dayThree = forecastData.list[i];
                    break;
                case 3:
                    dayFour = forecastData.list[i];
                    break;
                case 4:
                    dayFive = forecastData.list[i];
                    break;
                default:
                    break;
            }
            z++;
        }
    }


    document.getElementById('day-1').innerHTML = findDayOfWeek(dayOne.dt_txt);
    document.getElementById('day-2').innerHTML = findDayOfWeek(dayTwo.dt_txt);
    document.getElementById('day-3').innerHTML = findDayOfWeek(dayThree.dt_txt);
    document.getElementById('day-4').innerHTML = findDayOfWeek(dayFour.dt_txt);
    document.getElementById('day-5').innerHTML = findDayOfWeek(dayFive.dt_txt);

    document.getElementById('high-1').innerHTML = Math.round(dayOne.main.temp_max, 0) + '&deg;';
    document.getElementById('high-2').innerHTML = Math.round(dayTwo.main.temp_max, 0) + '&deg;';
    document.getElementById('high-3').innerHTML = Math.round(dayThree.main.temp_max, 0) + '&deg;';
    document.getElementById('high-4').innerHTML = Math.round(dayFour.main.temp_max, 0) + '&deg;';
    document.getElementById('high-5').innerHTML = Math.round(dayFive.main.temp_max, 0) + '&deg;';

    document.getElementById('img-1').setAttribute('src', imageWeather + dayOne.weather[0].icon + '.png');
    document.getElementById('img-2').setAttribute('src', imageWeather + dayTwo.weather[0].icon + '.png');
    document.getElementById('img-3').setAttribute('src', imageWeather + dayThree.weather[0].icon + '.png');
    document.getElementById('img-4').setAttribute('src', imageWeather + dayFour.weather[0].icon + '.png');
    document.getElementById('img-5').setAttribute('src', imageWeather + dayFive.weather[0].icon + '.png');

    document.getElementById('img-1').setAttribute('alt', dayOne.weather[0].description);
    document.getElementById('img-2').setAttribute('alt', dayOne.weather[0].description);
    document.getElementById('img-3').setAttribute('alt', dayOne.weather[0].description);
    document.getElementById('img-4').setAttribute('alt', dayOne.weather[0].description);
    document.getElementById('img-5').setAttribute('alt', dayOne.weather[0].description);

    document.getElementById('condition-1').innerHTML = dayOne.weather[0].main;
    document.getElementById('condition-2').innerHTML = dayTwo.weather[0].main;
    document.getElementById('condition-3').innerHTML = dayThree.weather[0].main;
    document.getElementById('condition-4').innerHTML = dayFour.weather[0].main;
    document.getElementById('condition-5').innerHTML = dayFive.weather[0].main;

    document.getElementById('low-1').innerHTML = Math.round(dayOne.main.temp_min, 0) + '&deg;';
    document.getElementById('low-2').innerHTML = Math.round(dayTwo.main.temp_min, 0) + '&deg;';
    document.getElementById('low-3').innerHTML = Math.round(dayThree.main.temp_min, 0) + '&deg;';
    document.getElementById('low-4').innerHTML = Math.round(dayFour.main.temp_min, 0) + '&deg;';
    document.getElementById('low-5').innerHTML = Math.round(dayFive.main.temp_min, 0) + '&deg;';
}