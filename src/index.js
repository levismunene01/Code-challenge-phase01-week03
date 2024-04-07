// Function to fetch movies data from a local server and display them
function moviesArray() {
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(moviesArray => {
        // Display movie titles and information
        displayMovieTitles(moviesArray);
        // Display details of the first movie
        displayMovieOne(moviesArray[0]);
    });
}

// Call the moviesArray function to initiate fetching and displaying movies


moviesArray();

// Function to display movie titles
function displayMovieTitles(moviesarray) {
    let ul = document.getElementById("films");
    ul.innerHTML = ""; // Clear the existing content of the films list
    moviesarray.map(movie => {
        let li = document.createElement("li"); 
        // Create a list each movie
        li.className = "film item";
        
        li.addEventListener("click", () => handleClick(movie)); 
        // Add event listener for clicking on movie
        li.textContent = `${movie.title}`; 
        // Set text content of list item to movie title
        ul.appendChild(li);
        
    });
}

// Here you display details of a single movie
function displayMovieOne(data) {
    let h1 = document.getElementById("title");
    h1.textContent = data.title;
    let div = document.getElementById("runtime");
    div.textContent = `${data.runtime} minutes`;
    let p = document.getElementById("film-info");
    p.textContent = data.description;
    let span = document.getElementById("showtime");
    span.textContent = data.showtime;
    let span2 = document.getElementById("ticket-num");
    span2.textContent = data.capacity - data.tickets_sold;
    let img = document.getElementById("poster");
    img.src = data.poster;
    let btn = document.getElementById("buy-ticket");
    btn.removeEventListener("click", handleTicket);
    btn.addEventListener("click", () => handleTicket(span2, data));
}

// Function to show out come when a button is clicked
function handleClick(data) {
    let h1 = document.getElementById("title");
    h1.textContent = data.title;
    let div = document.getElementById("runtime");
    div.textContent = `${data.runtime} minutes`;
    let p = document.getElementById("film-info");
    p.textContent = data.description;
    let span = document.getElementById("showtime");
    span.textContent = data.showtime;
    let span2 = document.getElementById("ticket-num");
    span2.textContent = data.capacity - data.tickets_sold;
    let img = document.getElementById("poster");
    img.src = data.poster;
    let btn = document.getElementById("buy-ticket");
    btn.removeEventListener("click", handleTicket);
    btn.addEventListener("click", () => handleTicket(span2, data));
}


// reduces the count down of the ticket
function handleTicket(span2, data) {
    let count = parseInt(span2.textContent);
    if (count > 0) {
        count -= 1;
        span2.textContent = count;
        console.log(`Ticket purchased for ${data.title}`);
    } else {
        console.log(`No more tickets available for ${data.title}`);
    }
}

