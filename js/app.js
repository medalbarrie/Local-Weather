var img = [
    'url("img/veryHot.jpg")',
    'url("img/hot.jpg")',
     'url("img/winter.jpg")',
     'url("img/freezing.jpg")',
]

var units = 'imperial';

var weatherCoordinates = function(lat, long) {
    this.latiude = lat;
    this.longitude = long;
}

var newWeatherCorrdinates = new weatherCoordinates(0, 0);

function findLocation () {
    var show = document.getElementById('weather');
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);

    }else {
        show.innerHTML = 'Something Went Worng.. I will recommed upgrading your browser.';
    }
};

function getPosition(position) {
    newWeatherCorrdinates.latiude = position.weatherCoordinates.latiude;
    newWeatherCorrdinates.longitude = position.weatherCoordinates.longitude;
    
    CallWeatherAPI(); 

};

//Weather API

function getUrl(lat, long, units) {
    var appId = '16c3de9108ed16c9179c1c51008b687e';
    return 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +
    '&lon=' +
    lon + '&units=' + units + '&appid=' + appid;
}

function Unit() {
    $('.f').is(':checked') ? units = 'imperial' : units = 'metric';
    CallWeatherAPI();
}

function getWeather(data) {
    var temperature = data.main.temperature
    var temperatureUnit = units === 'metric' ? 'C' : 'F';
    var windUnit = units === 'metric' ? 'metric/sec' : 'miles/hour';
    var description = data.weather[0].description;
    var code = data.weather[0].icon;
    var windSpeed = data.wind.speed;
    var city = data.name;


var mainHtml = '<img src="https://openweathermap.org/img/w/' + code +
    '.png" alt="Weather Icon" class="icon">' + '<p> ' + Math.round(temp) + ' ' + tempUnit +
    ', ' + description + '<br> Wind Speed: ' + wspeed + windUnit + '</p><p>' +
    city + '</p>';

    $('#weather').html(mainHtml);
    var temperatureArr = prepBackground(tempUnit);
    setBackground(temperature, temperatureArr);

};


