
// !!! FUTURE FEATURE TO BE ADDED !!!



// function pullData(data) {
//   var game = document.getElementsByClassName('name');
//   // let evenNumbers = game.filter(number => number % 2 == 0)
//   console.log(game)

//   for (i=0; i<game.length; i++) {
//     console.log(game[i].innerText.trim().replace("'", "").replace(/\W+/g, '-').toLowerCase());
//     gameName = game[i].innerText.trim().replace("'", "").replace(/\W+/g, '-').toLowerCase();
//     searchData(gameName)
//   }
 
//   function searchData(gameName) {
//     var apiKey = "c05709b8272a44a0924883e7b3228b14";
//     var apiUrl = "https://api.rawg.io/api/games/" + gameName + "?key=" + apiKey;
//       fetch(apiUrl)
//         .then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
//             showGames(data);
//           });
//         }
//     });
//   }
// };

  
// function showGames(data) {
//   //var searchUrl1 =  data.results.sourceUrl;


//   // let description = document.createElement("P");
//   // description.innerHTML = data.description_raw;

//   // let div = document.getElementById('555');
//   // div.appendChild(description);


//   for (i=0; i<data.length; i++) {
//     let description = document.createElement("P");
//     description.innerHTML = data.description_raw;
    
//     addData(description);

//   }

//   function addData(description) {
//     let div = document.getElementById('555');
//     div.appendChild(description);
//   }
//   // ('game-pic').src = data.background_image;
//   // document.getElementsByClassName('description').innerHTML = data.description_raw;
//   // console.log(data.rating);
// };


// pullData();