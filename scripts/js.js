let test = document.getElementById("test");
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

fetch('https://animechan.vercel.app/api/random')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        var text = test.innerHTML = `<b>Anime Name:</b> ${data.anime} <br><b>Character:</b> ${data.character}<br><b>Quote:</b> ${data.quote}`;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

