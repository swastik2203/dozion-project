//jshint esversion: 8
// require('dotenv').config();
fetch("https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11bmRzd2FzdGlrQGdtYWlsLmNvbSIsImlhdCI6MTY0NDk0MTgwNiwiZXhwIjo3OTUyMTQxODA2fQ.oLyg7H--oeoSc_OqgqKsL9NMSpucaFSVmdBbzwXwCsE&exchange=binance&symbol=BTC/USDT&interval=30m&backtrack=1")
.then(data =>{
  return data.json();
})
.then(completeData =>{
  console.log(completeData.value);
  var data = [
  	{
  		domain: { x: [0, 1], y: [0, 1] },
  	  value: completeData.value,
  		title: { text: "RSI INDEX" },
  		type: "indicator",
  		mode: "gauge+number"
  	}
  ];

  var layout = { width: 300, height: 300, margin: { t: 0, b: 0,l: 0,r: 0 },paper_bgcolor: '#000000', };
  Plotly.newPlot('rsi', data, layout);

})
.catch(err =>{
  console.log(err);
});
