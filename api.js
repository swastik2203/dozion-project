//jshint esversion: 8
require('dotenv').config();
async function allCoins(){
  var response = await fetch("https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "coingecko.p.rapidapi.com",
  		"x-rapidapi-key": process.env.KEY
  	}
  });
  var result = response.json();
  var newResult = result.json();
  var data = newResult.map((getData) => {
    const card = document.getElementById('coin-card');
    card.innerHTML = `<h1>getData.name</h1>`;
    console.log(result);


});
}

allCoins();
