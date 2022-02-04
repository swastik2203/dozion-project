//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/crypto.html", function(request,response){
  response.sendFile(__dirname + "/crypto.html");

  const http = require("https");

  const options = {
  	"method": "GET",
  	"hostname": "coingecko.p.rapidapi.com",
  	"port": null,
  	"path": "/coins/list",
  	"headers": {
  		"x-rapidapi-host": "coingecko.p.rapidapi.com",
  		"x-rapidapi-key": "53c8c1db14msh4bce4dd874042d8p159ccbjsn81b87eabb0c4",
  		"useQueryString": true
  	}
  };

  const req = http.request(options, function (res) {
  	const chunks = [];

  	res.on("data", function (chunk) {
  		chunks.push(chunk);
  	});

  	res.on("end", function () {
  		const body = Buffer.concat(chunks);
      const data = JSON.parse(body.toString());
      console.log(data);
      const data1 = data[1].id;
      console.log(data1);
      // response.send(data1);
  	});
  });

  req.end();
});

app.listen(3000, function() {
    console.log("Server started at port 3000");
});
