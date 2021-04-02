 function pullData(data) {
   var apiKey = "c05709b8272a44a0924883e7b3228b14"
  var apiUrl = "https://api.rawg.io/api/games?key=" + apiKey;
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
      var searchUrl1 =  data.results[0].sourceUrl;
      document.getElementById('game1').innerHTML = data.results[0].name;
console.log(searchUrl1)
  };


pullData();
