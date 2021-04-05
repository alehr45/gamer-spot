function pullData(data) {
  var game = document.getElementsByClassName('name');
  // let evenNumbers = game.filter(number => number % 2 == 0)
  for (i=0; i<game.length; i++) {
    gameName = game[0].innerText.replace("'", "").replace(/\W+/g, '-').toLowerCase();
    //console.log(gameName);
    searchData(gameName)
  }
  function searchData(gameName) {
    var apiKey = "c05709b8272a44a0924883e7b3228b14";
    var apiUrl = "https://api.rawg.io/api/games/" + gameName + "?key=" + apiKey;
      fetch(apiUrl)
        .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            showGames(data);
          });
        }
    });
  }
};

  
function showGames(data) {
      console.log(data.name);
      document.getElementById('game-pic').src = data.background_image;
      document.getElementById('description').innerHTML = data.description_raw;
      //console.log(data.rating);
  };


pullData();
