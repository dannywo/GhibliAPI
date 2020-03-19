console.log("start app.js");

// Createa request variable and assign a new XMLHttpRequest objest to it.
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibli.herokuapp.com/films', true);

request.onload = function() {
    //Begin accessing JSON data here

}

// Send request
request.send();

console.log("end app.js")