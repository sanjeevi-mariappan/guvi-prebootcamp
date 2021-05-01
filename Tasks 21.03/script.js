restCountriesData();

function restCountriesData(){
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
     let responseObj = JSON.parse(xhr.response);
     for(let key of responseObj){
         let name=key.name;
         let [lat,long]=key.latlng;
         getWeatherData(lat,long);
     }
    }
  }
};

function getWeatherData(lat,lon){
    let xhr = new XMLHttpRequest();
    let apiKey = "f814e12d55aa5d26b27e56c59b002cc8";
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    xhr.open(
    "GET",
    url
  );
  xhr.send();
  xhr.onload=function(){
    if (xhr.status != 200) {
        //alert(`Error ${xhr.status}: ${xhr.statusText}`);
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }else{
        let responseObj = JSON.parse(xhr.response);
        console.log(responseObj.name,responseObj.main.temp);
    }
  }
}




