//Please sign in to AccuWeather developer account to get your API key and paste it below
var APIkey = '';

//--------------------option cities in a select menu--------------------------------------------------------------//
//vancouver city id is 53286(check the documentation for a different ids)
var vancouverWeatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/53286?apikey='+APIkey+'&details=true&metric=true';
//toronto city id is 55488(check the documentation for a different ids)324505
var torontoWeatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/55488?apikey='+APIkey+'&details=true&metric=true';
//kyiv city id is 324505(check the documentation for a different ids)
var kyivWeatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/324505?apikey='+APIkey+'&details=true&metric=true';


//-------------------using geo location code-----------------------------------------------------------------------//
var geoLocation = function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
    else{
        alert("Your browser does not support geo location!");
    }

    function locationSuccess(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        //function to retrieve city KEY and send GET http request to retrieve forecast for that city
        var cityIdWeather = function(data) {
            var key = data.ParentCity.Key;
            var weatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'+key+'?apikey='+APIkey+'&details=true&metric=true';
            $.get(weatherUrl, null, callback);
        };

        //looking for the city id using geolocation
        var cityIdUrl = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey='+APIkey+'&q='+lat+'%2C'+lon+'';
        $.get(cityIdUrl, null, cityIdWeather);
    }

    function locationError(error){
        switch(error.code) {
            case error.TIMEOUT:
                alert("A timeout occured! Please try again!");
                break;
            case error.POSITION_UNAVAILABLE:
                alert('We can\'t detect your location. Sorry!');
                break;
            case error.PERMISSION_DENIED:
                alert('Please allow geolocation access for this to work.');
                break;
            default:
                alert('An unknown error occured!');
                break;
        }
    }

};


//-------------------retrieving all the information and storing in arrays-----------------------------------------//
var weatherDay = [], minTemperature = [], maxTemperature= [], weatherText= [], weatherIcon= [], weatherWindSpeedKmPerHour= [],
    weatherWindDirection = [], sunRiseHours = [], sunSetHours = [], hoursOfSun = [];

var celsius = '&#8451;';//celsius symbol
var forecastLengthInDays = 5;//forecast for 5 days based on API

var callback = function(data) {
    //looping through the days and storing them in a specific arrays
    for (var i = 0; i < forecastLengthInDays; i++) {
        weatherDay[i] = data.DailyForecasts[i].Date;
        minTemperature[i] = data.DailyForecasts[i].Temperature.Minimum.Value;
        maxTemperature[i] = data.DailyForecasts[i].Temperature.Maximum.Value;
        weatherText[i] = data.DailyForecasts[i].Day.IconPhrase;
        weatherIcon[i] = data.DailyForecasts[i].Day.Icon;
        weatherWindSpeedKmPerHour[i] = data.DailyForecasts[i].Day.Wind.Speed.Value;
        weatherWindDirection[i] = data.DailyForecasts[i].Day.Wind.Direction.Degrees;
        sunRiseHours[i] = (new Date(data.DailyForecasts[i].Sun.Rise)).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        sunSetHours[i] = (new Date(data.DailyForecasts[i].Sun.Set)).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        hoursOfSun[i] = data.DailyForecasts[i].HoursOfSun;
    }

    //date formatting based on week days and months
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    //creating a new weatherToday div in forecast div
    $('#forecastDiv').empty();
    $('#forecastDiv').append('<div id="weatherTodayDiv"></div>');

    //forecast for #weatherTodayDiv
    $('#weatherTodayDiv').append('<div id="dateDiv">' + weekDays[(new Date(weatherDay[0])).getDay()] + '<br>' +
        (new Date(weatherDay[0])).getDate()+ " " + months[new Date(weatherDay[0]).getMonth()] + " " + new Date(weatherDay[0]).getFullYear() + '</div>');
    $('#weatherTodayDiv').append('<div id="weatherTextDiv">' + weatherText[0] + '</div>');
    $('#weatherTodayDiv').append('<div id="temperatureDiv">' + 'High: '+ maxTemperature[0] + celsius +'<br>' +'Low: '+ minTemperature[0] + celsius + '</div>');
    $('#weatherTodayDiv').append('<div id="windSpeedDiv">' +'Wind:'+ weatherWindSpeedKmPerHour[0] +'km/h '+ weatherWindDirection[0]+ '</div>');
    $('#weatherTodayDiv').append('<div id="totalSunHoursDiv">' +'Hours of sun: '+ hoursOfSun[0] +'</div>');
    $('#weatherTodayDiv').append('<div id="sunHoursDiv">' +'Sunrise: '+ sunRiseHours[0] +' Sunset: '+ sunSetHours[0]+ '</div>');

    //function for the weather code specification based on API to show specific animation in a main div
    mainWeatherCodeCheck(weatherIcon[0]);

    //looping other days in our forecast
    //creating divs with styling and showing forecast info
    for (var i = 1; i < forecastLengthInDays; i++) {
        nextDay = document.createElement('div');
        nextDay.id = "nextDay"+i;
        nextDay.style.border = "1px solid white";
        nextDay.style.margin = "5px 0 0 0";
        nextDay.style.backgroundColor = "#161616";
        nextDay.style.padding = "10px 20px 10px 20px";

        var nextDateDiv = document.createElement('div');
        nextDateDiv.id = 'nextDateDiv'+i;
        var dateText = document.createTextNode(weekDays[(new Date(weatherDay[i])).getDay()] + ' ' + (new Date(weatherDay[i])).getDate()+ " " +
            months[new Date(weatherDay[i]).getMonth()] + " " + new Date(weatherDay[i]).getFullYear());
        nextDateDiv.appendChild(dateText);
        nextDateDiv.style.color = "white";
        nextDateDiv.style.position = "absolute";
        nextDateDiv.style.margin = "0";
        nextDay.appendChild(nextDateDiv);

        var nextWeatherTextDiv = document.createElement('div');
        nextWeatherTextDiv.id = 'nextWeatherTextDiv'+i;
        var weatherDegrees = document.createTextNode(weatherText[i]);
        nextWeatherTextDiv.appendChild(weatherDegrees);
        nextWeatherTextDiv.style.color = "white";
        nextWeatherTextDiv.style.position = "absolute";
        nextWeatherTextDiv.style.margin = "40px 0 0 0";
        nextDay.appendChild(nextWeatherTextDiv);

        var nextTemperatureDiv = document.createElement('div');
        nextTemperatureDiv.id = 'nextTemperatureDiv'+i;
        var temperatureText = document.createTextNode(maxTemperature[i] + "\u2103" + ' | ' + minTemperature[i] + "\u2103");
        nextTemperatureDiv.appendChild(temperatureText);
        nextTemperatureDiv.style.color = "white";
        nextTemperatureDiv.style.position = "relative";
        nextTemperatureDiv.style.textAlign = "end";
        nextTemperatureDiv.style.marginBottom = "-20px";
        nextDay.appendChild(nextTemperatureDiv);

        miniIconWeatherCodeCheck(i);
        $('#forecastDiv').append(nextDay);
    }

};

//function for the weather code specification(this function is only for #weatherTodayDiv(icon size is bigger))
var mainWeatherCodeCheck = function(param) {
    switch(param){
        case 1:case 2:case 3:case 4:case 5:case 21:
            sun();
            break;
        case 6:case 7:case 8:case 11:case 19:case 20:
            cloud();
            break;
        case 12:case 13:case 18:
            rain();
            break;
        case 14:case 26:
            lightRain();
            break;
        case 15:case 16:case 17:
            thunder();
            break;
        case 22:case 23:case 24:case 25:case 29:
            snow();
            break;
        default:
            break;
    }
};

//function for the weather code specification(this function is only for #nextDayDiv(icon size is smaller))
var miniIconWeatherCodeCheck = function(param) {
    switch(weatherIcon[param]){
        case 1:case 2:case 3:case 4:case 5:case 21:
            miniSun();
            break;
        case 6:case 7:case 8:case 11:case 19:case 20:
            miniCloud();
            break;
        case 12:case 13:case 18:
            miniRain();
            break;
        case 14:case 26:
            miniLightRain();
            break;
        case 15:case 16:case 17:
            miniThunder();
            break;
        case 22:case 23:case 24:case 25:case 29:
            miniSnow();
            break;
        default:
            break;
    }
};

//function for preselected cities
var chooseCity = function(){

    var selectedValue = document.getElementById("citySelection");
    var userChoice = selectedValue.options[selectedValue.selectedIndex].text;

    if (userChoice == 'Toronto'){
        $.get(torontoWeatherUrl, null, callback);
    }
    else if (userChoice == 'Vancouver'){
        $.get(vancouverWeatherUrl, null, callback);
    }
    else if (userChoice == 'Kyiv'){
        $.get(kyivWeatherUrl, null, callback);
    }
    else if (userChoice == 'Choose a city'){
        $('#forecastDiv').empty();
    }
};
