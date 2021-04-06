let test = document.getElementById("test");
let test2 = document.getElementById("test2");
/*fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json()) 
    .then(quote => test.innerHTML = `<b>Anime Name:</b> ${quote.anime} <br><b>Character:</b> ${quote.character}<br><b>Quote:</b> ${quote.quote}`)


    let response = await fetch('https://animechan.vercel.app/api/random');
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
      } else {
        alert("HTTP-Error: " + response.status);
      }
*/
let number = Math.floor(Math.random() * 23990);
fetch(
  `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=1&offset=${number}&hateoasMode=off`
)
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      //console.log(data);
      //console.log(data.data[0].city);
      let cityName = data.data[0].city;
      let countryName = data.data[0].country;
      console.log(countryName);
      console.log(cityName);
      test.innerHTML = `<b>Country: </b> ${countryName}<br><b>City: </b> ${cityName}`


      fetch(`https://goweather.herokuapp.com/weather/${cityName}`)
        .then(function (response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }

          // Examine the text in the response
          response.json().then(function (data) {
            console.log(data);
            let temparature = data.temperature;
            let wind = data.wind;
            let description = data.description;
            if (temparature === "") {
                console.log("intet vejr")
                test2.innerHTML = "Intet vejr at vise"
            } else {
            test2.innerHTML = `<b>Temparature: </b>${temparature} <br><b>Wind: </b>${wind} <br><b>Description: </b>${description} <br>`
            }
          });
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
        });
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });
