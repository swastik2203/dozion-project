//jshint esversion: 6
const d = new Date();
document.getElementById("date").innerHTML = d.toDateString();


// --------------------------CAROUSEL-----------------------------

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("box");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// ------------API-------------

fetch("https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "53c8c1db14msh4bce4dd874042d8p159ccbjsn81b87eabb0c4"
	}
})
.then(response => {
  var result = response.JSON();
  var data = result.map((getData) => {
    return(`<h1>getData.name</h1>`);
  });
	console.log(response);
})
.catch(err => {
	console.error(err);
});
