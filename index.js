function getWeather(city)
{
    let message='';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    request(url, function (err, response, body) {
        if(err){
            console.log('error:', err);
        } else {
            
            let weather = JSON.parse(body);
            message = `${weather.main.temp}`;
            temperatures[city]=`${message}C`;
            if(a==getSizeOf(temperatures))
                console.log(temperatures);
        }
    });
}
function getSizeOf(temperatures){
    let size=0;
    for (let key in temperatures) {
 
        if (temperatures.hasOwnProperty(key)) {
            size++;
        }
    }
    return size;
}
let request = require('request');
let apiKey = '0e4360bda03cc4ea1394008cffd61598';
let temperatures={};
const readline = require("readline-sync");
let a = Number(readline.question());
let cities=[];
for (let i = 0; i < a; ++i) {
    cities.push(readline.question());
}
for (let i = 0; i < a; ++i){
    let c=cities[i];
    getWeather(c,a);
}
