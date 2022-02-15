//jshint esversion: 8
//require('dotenv').config();
fetch("https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11bmRzd2FzdGlrQGdtYWlsLmNvbSIsImlhdCI6MTY0NDk0MTgwNiwiZXhwIjo3OTUyMTQxODA2fQ.oLyg7H--oeoSc_OqgqKsL9NMSpucaFSVmdBbzwXwCsE&exchange=binance&symbol=BTC/USDT&interval=30m&backtrack=1")
.then(data =>{
  return data.json();
})
.then(completeData =>{
  console.log(completeData.value);
  document.getElementById('rsi').innerHTML =completeData.value;
})
.catch(err =>{
  console.log(err);
});
// console.log(rsi);
