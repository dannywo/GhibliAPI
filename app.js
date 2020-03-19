console.log("start app.js");

// Createa request variable and assign a new XMLHttpRequest objest to it.
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    //Begin accessing JSON data here
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        console.log(data);

        data.forEach(movie => {
            console.log(movie.title);
        });
    } else {
        console.log('error!!!!')
    }
}

// Send request
request.send();

console.log("end app.js")