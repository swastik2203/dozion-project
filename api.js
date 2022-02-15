//jshint esversion: 8

fetch("https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "53c8c1db14msh4bce4dd874042d8p159ccbjsn81b87eabb0c4"
	}
})
.then(data => {
	return data.json();
})
.then(completeData => {
  let html = "";
  completeData.map(values => {
    html += `
    <div class="coin "  style="min-width:350px;">
      <div class="coin-title" style="display:flex; text-transform:uppercase;">
        <h4>${values.name} (${values.symbol})</h4>
        <img src=${values.image} alt="img" style="width:40px; height:40px;">
      </div>
      <div class="coin-price"  style="display:flex;">
        <div>Price</div>
        <p>$ ${values.current_price}</p>
      </div>
      <div class="coin-cap"  style="display:flex;">
        <div>Market Cap</div>
        <p>$ ${values.market_cap}</p>
      </div>
      <div class="coin-change"  style="display:flex;">
        <div>Daily Change</div>
        <p>${values.price_change_percentage_24h} %</p>
      </div>
    </div>
    ` ;
  });
  document.getElementById('coin-card').innerHTML = html;
})
.catch(err => {
	console.error(err);
});

// ---------------------SEARCH BAR---------------------

const searchCoin = ()=>{
	let filterText = document.getElementById("filter").value.toUpperCase();
	console.log(filterText);

  let gridfilter = document.getElementsByClassName("coin");
	if(filterText===""){

	}

  for(var i = 0; i<gridfilter.length; i++) {
    let textValue = gridfilter[i].innerText;

    if(textValue.indexOf(filterText) > -1) {
      gridfilter[i].style.display = '';
    } else {
      gridfilter[i].style.display = 'none';
    }

  }

};

// document.querySelector(".bar").addEventListener('keydown',(e)=>{
// 	let keyName = e.key;
// 	if(keyName==='Backspace'){
//     searchCoin();
//
// 	}
// 	// console.log(keyName);
// });
