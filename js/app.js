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

