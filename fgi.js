//jshint esversion: 8

async function getFgi(){
  let response = await fetch("https://api.alternative.me/fng/?limit=1");
  let result = await response.json();
  console.log(result);
  var data = [
  	{
  		domain: { x: [0, 1], y: [0, 1] },
  	  value: result.data[0].value,
  		title: { text: "FGI METER" },
  		type: "indicator",
  		mode: "gauge+number"
  	}
  ];
  var layout = { width: 300, height: 300, margin: { t: 0, b: 0,l: 0,r: 0 },paper_bgcolor: '#000000', };
  Plotly.newPlot('fgi', data, layout);
}

getFgi();


// fetch("https://api.alternative.me/fng/?limit=1")
// .then(data =>{
//   return data.json();
// })
// .then(completeData =>{
//   completeData = completeData.data[0].value;
//   console.log(completeData);
//   var data = [
//   	{
//   		domain: { x: [0, 1], y: [0, 1] },
//   	  value: completeData,
//   		title: { text: "FGI METER" },
//   		type: "indicator",
//   		mode: "gauge+number"
//   	}
//   ];
//
//   var layout = { width: 300, height: 300, margin: { t: 0, b: 0,l: 0,r: 0 },paper_bgcolor: '#000000', };
//   Plotly.newPlot('fgi', data, layout);
//
// })
// .catch(err =>{
//   console.log(err);
// });
