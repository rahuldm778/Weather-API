const express=require("express");
const https=require("https");
const app = express();

app.get("/", function(req,res){

  const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData=JSON.parse(data)
      const temp=weatherData.main.temp
      const weatherDescription =
    })
  });

  res.send("Server is up and running.");
});


app.listen(3000, function(){
  console.log("Server is running on port 300.");
});
