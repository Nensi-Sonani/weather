// document.getElementById("btn").addEventListener("click",function(){
//     navigator.geolocation.getCurrentPosition((position)=>{
//         let lat = position.coords.latitude
//         let lan = position.coords.longitude
//         console.log(lat,lan);
//     });
// });
fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1a26708ce353c0fd4ceb97aaa7863ce3`)
.then((Response)=>Response.json())
.then(data=>console.log(data.main.temp));