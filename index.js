var avengersImages = {
    "Iron Man" : "./pictures/ironman.jpg",
    "Captain America" : "./pictures/captainAmerica.jpg",
    "Thor" : "./pictures/thor.jpg",
    "Hulk" : "./pictures/hulk.jpg",
    "Black Widow" : "./pictures/blackWidow.jpg",
    "Hawkeye" : "./pictures/hawkeye.jpg"
  }
var avengersHeroes = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawkeye"
  ]

var button = $('button');
button.on("click", buttonGenerate);


function buttonGenerate (){
  var x = Math.floor(Math.random()*avengersHeroes.length)

  var heroText = $('h2')

  var heroName = avengersHeroes[x]
  heroText.text(heroName)

  var heroImage = $('#hero-img')
  heroImage.attr("src", `${avengersImages[heroName]}`)
}
