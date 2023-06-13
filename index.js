// calling api with city name 

const getweather=(city)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1a26708ce353c0fd4ceb97aaa7863ce3`)
    .then((response)=>response.json())
    .then(data=>console.log(data));
}

// function for getting city name 
document.getElementById("location").addEventListener("keypress",function(e){
    // console.log(e.key);
    if(e.key == "Enter"){
        let city = document.getElementById("location").value
        console.log(city);
        getweather(city)
    }
})


// calling api with latitude and longitude

const get=(lat,lon)=>{
    console.log(lat,lon);
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1a26708ce353c0fd4ceb97aaa7863ce3&units=metric`)
    .then((response)=>response.json())
    .then(data=>console.log(data));
}


//function for getting latitude and longitude

document.getElementById("btn").addEventListener("click",function(){
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lan = position.coords.longitude
        console.log(lat,lan);
        get(lat,lan)
    });
});











