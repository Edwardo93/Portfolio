const svgPath = document.querySelectorAll('path')
const div = document.querySelector('div')
const timeBtn = document.querySelector("#timeBtn")
const weatherBtn = document.querySelector("#weatherBtn")
const googleBtn = document.querySelector("#googleBtn")
const closeBtn = document.querySelector("#closeBtn")
const backBtn = document.querySelector("#backBtn")
const googlePar = document.getElementById("#googlePar")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")

// itterating through the countries with the for loop

async function getData(place){
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=f01f759c4b48426bb93743b823e5b1d8&location=${place}`
    const res = await fetch(url)
    data = await res.json()
    time = data.datetime
    document.getElementById("timeCont").innerText = `${place}'s date and time is ${time}` 
}

for(let paths of svgPath){

// Pop up card function with country name and fill color for speicific country
// when hovering

    let countryName = paths.getAttribute("data-name")

    paths.addEventListener('mouseover', function(){
    window.onmousemove = function(j){
    x=j.clientX
    y=j.clientY
    document.getElementById("name").style.top=y-50+"px"
    document.getElementById("name").style.left=x+20+"px"
    document.getElementById("name").style.visibility = "visible"
    document.getElementById('nameP').innerText = countryName
   }
    })

// Makes the country Div appear

   paths.addEventListener('mouseover', function(){
   paths.style.fill = '#c7bf8f'
   document.getElementById('name').style.opacity = 1})
// Makes the country Div dissapear 
   paths.addEventListener('mouseleave', function(){ 
   paths.style.fill  = '#f2f2f2'
   document.getElementById('name').style.opacity = 0
    })

function timeFunc(){
        document.getElementById("timeCont").style.visibility = "visible"
}
//trying to create live update for time

function weatherFunc(){
    let country = document.getElementById("weatherPar").innerHTML
    document.querySelector(".mapContainer").style.display ="none"
    document.getElementById("timeCont").style.visibility = "hidden"

    document.querySelector(".weatherContainer").style.display ="flex"
    document.getElementById("searchInput").value = `${country}`
    checkweather(searchInput.value)
}

function googleFunc(){
    let country = document.getElementById("googlePar").innerHTML
    window.open(`https://www.google.com/search?q=${country}`)
}
// X - Closing button
    closeBtn.addEventListener("click", function(){
        document.querySelector(".choice-card").style.visibility = "hidden";
        document.querySelector("#timeCont").style.visibility = "hidden"
    })
// Choice window pops up --- Pop up card to be made hidden

    paths.addEventListener("click", function(){
    document.getElementById('timePar').innerHTML = `${countryName}`
    document.getElementById('weatherPar').innerHTML = `${countryName}`
    document.getElementById('googlePar').innerHTML = `${countryName}`
    document.querySelector(".choice-card").style.visibility = "visible"
    getData(countryName)

     } 
     )
    }

// ---------------------Weather Card-----------------

const apiKey = "24381086be3d601b75c2e55f2a03803f";
const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status === 404){
        alert("Plese type a valid City of Country")
    }
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
    
    document.querySelector("#feelsLike").innerHTML = `Feels like: ${Math.round(data.main.feels_like)}°C`;
    document.querySelector("#high").innerHTML =`High: ${Math.round(data.main.temp_max)}°C`;
    document.querySelector("#low").innerHTML =`Low: ${Math.round(data.main.temp_min)}°C`;

    if(data.weather[0].main == 'Clear'){
        document.querySelector(".weather-icon").setAttribute("src","images/clear.png")
    }
    else if(data.weather[0].main == 'Clouds'){
        document.querySelector(".weather-icon").setAttribute("src","images/clouds.png")
    }
    else if(data.weather[0].main == 'Rain'){
        document.querySelector(".weather-icon").setAttribute("src","images/rain.png")
    }
    else if(data.weather[0].main == 'Drizzle'){
        document.querySelector(".weather-icon").setAttribute("src","images/drizzle.png")
    }
    else if(data.weather[0].main == 'Mist'){
        document.querySelector(".weather-icon").setAttribute("src","images/mist.png")
    }else if(data.weather[0].main == 'Snow'){
        document.querySelector(".weather-icon").setAttribute("src","images/snow.png")
    }
}

searchBtn.addEventListener("click", function(){
    checkweather(searchInput.value)
})
//Back Button in the Weather Card
backBtn.addEventListener("click", function(){
    location.reload()
})