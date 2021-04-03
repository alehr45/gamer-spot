 
 
 function pullData(data) {
  var game = document.getElementById('name').innerHTML.split('-');
  game = game[0].trim().replace(/\W+/g, '-').toLowerCase();
  var apiKey = "c05709b8272a44a0924883e7b3228b14";
  var apiUrl = "https://api.rawg.io/api/games/" + game + "?key=" + apiKey;
    fetch(apiUrl)
      .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          showGames(data);
        });
      }
  });

};

  
function showGames(data) {
      //var searchUrl1 =  data.results.sourceUrl;
      document.getElementById('game-pic').src = data.background_image;
      document.getElementById('secondary-pic').src = data.background_image_additional;
      document.getElementById('description').innerHTML = data.description_raw;
console.log(data.rating);
  };


pullData();
