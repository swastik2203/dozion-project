//jshint esversion: 6
// fetch("https://crypto-market-news.p.rapidapi.com/crypto/bitcoin", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "crypto-market-news.p.rapidapi.com",
// 		"x-rapidapi-key": "53c8c1db14msh4bce4dd874042d8p159ccbjsn81b87eabb0c4"
// 	}
// })
console.log("working data");
fetch("https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?pair_ID=1057391&page=1&time_utc_offset=28800&lang_ID=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
		"x-rapidapi-key": "53c8c1db14msh4bce4dd874042d8p159ccbjsn81b87eabb0c4"
	}
})
.then(data => {
	return data.json()
})
.then(completeData => {
  let html = "";
	var final_news = completeData.data[0].screen_data.news;
	// final_news = final_news.slice(0 , 2);
  final_news.map((values) => {

    html += `
      <div class="news-item">
        <img src=${values.related_image} style="height:200px; width:200px;" >
        <h4>${values.HEADLINE} </h4>
      </div>
    ` ;
  });
  document.getElementById('news-card').innerHTML = html;
})
.catch(err => {
	console.error(err);
});
