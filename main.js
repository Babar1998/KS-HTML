fetch("http://www.omdbapi.com/?apikey=cf68d9b&type=movie&s=Iron Man")
    .then((res) => res.json())
    .then((data) => {

        var movieContainer = document.getElementById("movies");
        data["Search"].map(parsedData);
        function parsedData(movie) {
            //if (movie.Poster != "N/A") {
                
                
                
            // Create a div element for the movie card
            var movieCard = document.createElement("div");
            movieCard.className = "movie-card";
            
            // Create an img element for the movie poster
            var movieImage = document.createElement("img");
            movieImage.className = "movie-image";
            movieImage.src = movie.Poster;
            movieImage.alt = "Image not found";
            
            // Create p elements for the movie title and year
            var movieTitle = document.createElement("p");
            movieTitle.className = "movie-title";
            movieTitle.textContent = movie.Title;

            var movieYear = document.createElement("p");
            movieYear.className = "movie-year";
            movieYear.textContent = "Year: " + movie.Year;
            
            // Append the image, title, and year to the movie card
            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(movieYear);

            // Append the movie card to the container
            movieContainer.appendChild(movieCard);
        //}
        }
    });

async function searchResult() {
    const search_query = document.getElementById("title").value;
    if (search_query) {
        await fetch(`https://www.omdbapi.com/?apikey=cf68d9b&type=movie&s=${search_query}`)
            .then((res) => res.json())
            .then((data) => {
                var movieContainer = document.getElementById("movies");
                while (movieContainer.firstChild) {
                    movieContainer.removeChild(movieContainer.lastChild);
                }
                console.log(data);
                if (data["Response"] == "True") {

                    data["Search"].map(parsedData);
                } else {
                    alert(data["Error"])
                }
                function parsedData(movie) {
                    if (movie.Poster != "N/A") {



                        // Create a div element for the movie card
                        var movieCard = document.createElement("div");
                        movieCard.className = "movie-card";

                        // Create an img element for the movie poster
                        var movieImage = document.createElement("img");
                        movieImage.className = "movie-image";
                        movieImage.src = movie.Poster;
                        movieImage.alt = "Image not found";

                        // Create p elements for the movie title and year
                        var movieTitle = document.createElement("p");
                        movieTitle.className = "movie-title";
                        movieTitle.textContent = movie.Title;

                        var movieYear = document.createElement("p");
                        movieYear.className = "movie-year";
                        movieYear.textContent = "Year: " + movie.Year;

                        // Append the image, title, and year to the movie card
                        movieCard.appendChild(movieImage);
                        movieCard.appendChild(movieTitle);
                        movieCard.appendChild(movieYear);

                        // Append the movie card to the container
                        movieContainer.appendChild(movieCard);
                    }
                }

            })
    }
    else {
        alert("Please Enter Title")
    }
}

function yearFilter() {
    var yearSelect = document.getElementById("year");
    var selectedYear = yearSelect.value;
    console.log(selectedYear);


    var movieContainer = document.getElementById("movies");

    var movieYearElements = movieContainer.querySelectorAll(".movie-year");

    for (var i = 0; i < movieYearElements.length; i++) {
        var movieYear = movieYearElements[i];
        var yearText = movieYear.textContent;
        var year = parseInt(yearText.replace("Year: ", ""));

        if (year < selectedYear) {
            movieContainer.removeChild(movieYear.parentElement);
        }
    }
}