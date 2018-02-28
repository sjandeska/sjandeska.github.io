  let updateWidget = function(data) {
  console.log("Got weather data: ", data)
  window.myInfo=data
  let value=data.main.temp.toFixed(0)
console.log(value)
  let e=jQuery("#weather .card-text")
console.log(e)
  e.html("It is " + value + " degrees outside")
  let city=data.name
console.log(city)
  let f=jQuery("#weather .card-title")
  f.html(city)
  // let g=jQuery("#weather img")
console.log("hiya dumdum!")
  let div = jQuery("#weather img");
  let geturl = "https://openweathermap.org/img/w/"
  let day=data.weather[0];
  let weatherPic= day["icon"];
  let getWeather = geturl+ weatherPic + ".png"
div.attr('src', getWeather)
console.log(getWeather)
}
// console.log(getWeather)
// };
 // console.log(day)
 // window.yesInfo=day["icon"]
  // jQuery("#weather img").attr("src", "/img/w/" + weatherPic + ".png")
 // jQuery("weather img").attr("http:openweathermap.org/img/w/01d.png")

// YOUR CODE GOES HERE
// jQuery("#weather img").attr("src", + "/img/w/04d.png")}
///need to change the src so it only contains the root then figure out how to insert the unique icon and add .png
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.
//

// let getWeather = function(event) {
//   let latitude = '48.8566';
//   let longitude = '2.3522';
//   let apiKey = 'a2a194b394d92e154a2d7b127321a572'; // REPLACE THIS VALUE with your own key.
//
//   let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
//   weatherServiceURL += 'lat=' + latitude
//   weatherServiceURL += '&lon=' + longitude
//   weatherServiceURL +='&appid=' + apiKey + '&units=imperial'
// console.log("hi")


//
// let weatherTime = jQuery("#get_forecast");
// weatherTime.on("click", find);

let whereAmI = function(test){
  console.log("Is this thing working?")
  window.myInfo=test
  navigator.geolocation.getCurrentPosition(whereAmI);
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  // let div=jQuery("#weather");
  let latitude = test.coords.latitude.toFixed(4);
  let longitude = test.coords.longitude.toFixed(4);
  // let latitude = '41.8933';
  // let longitude = '-87.7813';
  let apiKey = 'a2a194b394d92e154a2d7b127321a572';
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'


//   let updateWidget = function(data) {
//   console.log("Got weather data: ", data)
//   window.myInfo=data
//   let value=data.main.temp.toFixed(0)
// console.log(value)
//   let e=jQuery("#weather .card-text")
// console.log(e)
//   e.html("It is " + value + " degrees Celsius outside")
//   let city=data.name
// console.log(city)
//   let f=jQuery("#weather .card-title")
//   f.html(city)
// }

// let findOut = function(outside) {
//   console.log("hellloooo")
//   outside.preventDefault();
//   navigator.geolocation.getCurrentPosition(whereAmI);
//   console.log("whereAmI?")
//   window.myInfo(outside)

// let find = function() {
//   console.log("trying")
//   outside.preventDefault();
//   navigator.geolocation.getCurrentPosition(whereAmI);
//   console.log("is this working?")
// }
  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}
jQuery("#get_forecast").on("click", whereAmI)
// jQuery("#get_forecast").on("click", getWeather)
// let weatherTime = jQuery("#get_forecast")
// weatherTime.on("click", find);
////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
