var cloud = function(){
    var cloud = document.createElement('div');
    cloud.className = 'icon cloudy';
    var cloud1 = document.createElement('div');
    cloud1.className = 'cloud';
    var cloud2 = document.createElement('div');
    cloud2.className = 'cloud';
    cloud.appendChild(cloud1);
    cloud.appendChild(cloud2);
    weatherTodayDiv.appendChild(cloud);
};
var snow = function(){
    var snow = document.createElement('div');
    snow.className = 'icon flurries';
    var snow1 = document.createElement('div');
    snow1.className = 'cloud';
    var snow2 = document.createElement('div');
    snow2.className = 'snow';
    var flake1 = document.createElement('div');
    flake1.className = 'flake';
    var flake2 = document.createElement('div');
    flake2.className = 'flake';
    snow2.appendChild(flake1);
    snow2.appendChild(flake2);
    snow.appendChild(snow1);
    snow.appendChild(snow2);
    weatherTodayDiv.appendChild(snow);
};
var rain = function(){
    var rain = document.createElement('div');
    rain.className = 'icon rainy';
    var rain1 = document.createElement('div');
    rain1.className = 'cloud';
    var rain2 = document.createElement('div');
    rain2.className = 'rain';
    rain.appendChild(rain1);
    rain.appendChild(rain2);
    weatherTodayDiv.appendChild(rain);
};
var sun = function(){
    var sun = document.createElement('div');
    sun.className = 'icon sunny';
    var sun1 = document.createElement('div');
    sun1.className = 'sun';
    var sun2 = document.createElement('div');
    sun2.className = 'rays';
    sun1.appendChild(sun2);
    sun.appendChild(sun1);
    weatherTodayDiv.appendChild(sun);
};
var thunder = function(){
    var thunder = document.createElement('div');
    thunder.className = 'icon thunder-storm';
    var thunder1 = document.createElement('div');
    thunder1.className = 'cloud';
    var thunder2 = document.createElement('div');
    thunder2.className = 'lightning';
    var thunder3 = document.createElement('div');
    thunder3.className = 'bolt';
    var thunder4 = document.createElement('div');
    thunder4.className = 'bolt';
    thunder.appendChild(thunder1);
    thunder.appendChild(thunder2);
    thunder2.appendChild(thunder3);
    thunder2.appendChild(thunder4);
    weatherTodayDiv.appendChild(thunder);
};
var lightRain = function(){
    var light_rain = document.createElement('div');
    light_rain.className = 'icon sun-shower';
    var light_rain1 = document.createElement('div');
    light_rain1.className = 'cloud';
    var light_rain2 = document.createElement('div');
    light_rain2.className = 'sun';
    var light_rain3 = document.createElement('div');
    light_rain3.className = 'rays';
    var light_rain4 = document.createElement('div');
    light_rain4.className = 'rain';
    light_rain2.appendChild(light_rain3);
    light_rain.appendChild(light_rain1);
    light_rain.appendChild(light_rain2);
    light_rain.appendChild(light_rain4);
    weatherTodayDiv.appendChild(light_rain);
};
//-------------------animated weather icons mini size, using only for the other days(in days[i] (i from 1))------------------------//
var miniCloud = function () {
    var mini_cloud = document.createElement('div');
    mini_cloud.className = 'mini_icon cloudy';
    var cloud1 = document.createElement('div');
    cloud1.className = 'mini_cloud';
    var cloud2 = document.createElement('div');
    cloud2.className = 'mini_cloud';
    mini_cloud.appendChild(cloud1);
    mini_cloud.appendChild(cloud2);
    mini_cloud.style.left = "42%";
    mini_cloud.style.top = "30px";
    nextDay.appendChild(mini_cloud);
}
var miniSnow = function () {
    var mini_snow = document.createElement('div');
    mini_snow.className = 'mini_icon flurries';
    var snow1 = document.createElement('div');
    snow1.className = 'mini_cloud';
    var snow2 = document.createElement('div');
    snow2.className = 'mini_snow';
    var flake1 = document.createElement('div');
    flake1.className = 'mini_flake';
    var flake2 = document.createElement('div');
    flake2.className = 'mini_flake';
    snow2.appendChild(flake1);
    snow2.appendChild(flake2);
    mini_snow.appendChild(snow1);
    mini_snow.appendChild(snow2);
    mini_snow.style.left = "42%";
    mini_snow.style.top = "30px";
    nextDay.appendChild(mini_snow);
}
var miniRain = function () {
    var mini_rain = document.createElement('div');
    mini_rain.className = 'mini_icon rainy';
    var rain1 = document.createElement('div');
    rain1.className = 'mini_cloud';
    var rain2 = document.createElement('div');
    rain2.className = 'mini_rain';
    mini_rain.appendChild(rain1);
    mini_rain.appendChild(rain2);
    mini_rain.style.left = "42%";
    mini_rain.style.top = "30px";
    nextDay.appendChild(mini_rain);
}
var miniSun = function () {
    var mini_sun = document.createElement('div');
    mini_sun.className = 'mini_icon sunny';
    var sun1 = document.createElement('div');
    sun1.className = 'mini_sun';
    var sun2 = document.createElement('div');
    sun2.className = 'mini_rays';
    sun1.appendChild(sun2);
    mini_sun.appendChild(sun1);
    mini_sun.style.left = "42%";
    mini_sun.style.top = "35px";
    nextDay.appendChild(mini_sun);
}
var miniThunder = function () {
    var mini_thunder = document.createElement('div');
    mini_thunder.className = 'mini_icon thunder-storm';
    var thunder1 = document.createElement('div');
    thunder1.className = 'mini_cloud';
    var thunder2 = document.createElement('div');
    thunder2.className = 'mini_lightning';
    var thunder3 = document.createElement('div');
    thunder3.className = 'mini_bolt';
    var thunder4 = document.createElement('div');
    thunder4.className = 'mini_bolt';
    mini_thunder.appendChild(thunder1);
    mini_thunder.appendChild(thunder2);
    thunder2.appendChild(thunder3);
    thunder2.appendChild(thunder4);
    mini_thunder.style.left = "42%";
    mini_thunder.style.top = "30px";
    nextDay.appendChild(mini_thunder);
}
var miniLightRain = function () {
    var mini_light_rain = document.createElement('div');
    mini_light_rain.className = 'mini_icon sun-shower';
    var light_rain1 = document.createElement('div');
    light_rain1.className = 'mini_cloud';
    var light_rain2 = document.createElement('div');
    light_rain2.className = 'mini_sun';
    var light_rain3 = document.createElement('div');
    light_rain3.className = 'mini_rays';
    var light_rain4 = document.createElement('div');
    light_rain4.className = 'mini_rain';
    light_rain2.appendChild(light_rain3);
    mini_light_rain.appendChild(light_rain1);
    mini_light_rain.appendChild(light_rain2);
    mini_light_rain.appendChild(light_rain4);
    mini_light_rain.style.left = "42%";
    mini_light_rain.style.top = "30px";
    nextDay.appendChild(mini_light_rain);
}