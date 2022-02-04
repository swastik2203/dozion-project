//jshint esversion: 8
async function allCoins(){
  var response = await fetch("https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "coingecko.p.rapidapi.com",
  		"x-rapidapi-key": "53c8c1db14msh4bce4dd874042d8p159ccbjsn81b87eabb0c4"
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
