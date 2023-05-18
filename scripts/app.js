/* eslint-disable no-undef */
// Catch the submission of the form and send the data using AJAX

// getMovies Functiono
function getMovies(searchText) {
  // Make a request to the API Using Axios
  axios.get(`http://www.omdbapi.com/?s=${searchText}`);
  // returns a promise
  then((response) => {
    console.log(response);
    const movies = response.data.Search;
    let output = '';
    $.each(movies, (index, movie) => {
      output += `
      <div class="col-md-3">
        <div class="well text-center">
          <img src="${movie.Poster}">
          <h5>${movie.Title}</h5>
          <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
        </div>
      </div>
      `;
    });
    $('#movies').html(output);
  })
    .catch((error) => {
      console.log(error);
    });
}

// Movie Selected Function
function movieSelected(id) {
  // Store the id in session storage, so when browser is closed, the id is removed
  sessionStorage.setItem('movieId', id);
  // Redirect to the movie.html page
  window.location = 'movie.html';
  return false;
}

// Get Movie Function
function getMovie() {
  const movieId = sessionStorage.getItem('movieId');
  // Making another request using Axios
  axios.get(`http://www.omdbapi.com/?i=${searchText}`);
  // returns a promise
  then((response) => {
    console.log(response);
    const movie = response.data;
    // Not a loop, bse we are only getting one movie
    let output = `
    <div class="row">
      <div claas="col-md-4">
        <img src="${movie.Poster}" class="thumbnail">
      </div>
      <div class="col-md-8">
      <h2>${movie.Title}</h2>
      <ul class="list-group">
        <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
        <li class="list-group-item"><strong>Released:</strong>${movie.Released}</li>
        <li class="list-group-item"><strong>Rated:</strong>${movie.Rated}</li>
        <li class="list-group-item"><strong>IMDB Rating:</strong>${movie.imdbRating}</li>
        <li class="list-group-item"><strong>Director:</strong>${movie.Director}</li>
        <li class="list-group-item"><strong>Writer:</strong>${movie.Writer}</li>
        <li class="list-group-item"><strong>Actors:</strong>${movie.Actors}</li>
      </ul>
      </div>
    </div>
    `;
    $('#movie').html(output);
  })
    .catch((error) => {
      console.log(error);
    });
}

$(document).ready(() => {
  // Create an Event Listener for the form submission
  $('#searchForm').on('submit', (eve) => {
    const searchText = $('#searchText').val();
    getMovies(searchText);
    eve.preventDefault();
  });
});
