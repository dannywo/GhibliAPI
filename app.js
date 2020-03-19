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
            console.log(movie.description);
            // Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
            // Create a p and set the text content to the film's description
            const p = document.createElement('p');
            // Limit description to 300 chars
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;

            // Append the cards to the container element
            container.appendChild(card);

            // Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);


        });
    } else {
        console.log('error!!!!')
    }
}

// Send request
request.send();


const app = document.querySelector("#root");
 console.log(app);
const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

console.log("end app.js")