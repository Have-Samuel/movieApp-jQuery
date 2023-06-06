/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function getMovies(searchText) {
  axios.get(`http://www.omdbapi.com/?apikey=thewdb&s=${searchText}`)
    .then((response) => {
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
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie() {
  const movieId = sessionStorage.getItem('movieId');

  axios.get(`http://www.omdbapi.com/?apikey=thewdb&i=${movieId}`)
    .then((response) => {
      const movie = response.data;

      const output = `
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              <li class="list-group-item"><strong>Plot:</strong> ${movie.Plot}</li>
              <li class="list-group-item"><strong>Runtime:</strong> ${movie.Runtime}</li>
              <li class="list-group-item"><strong>Country:</strong> ${movie.Country}</li>
              <li class="list-group-item"><strong>Language:</strong> ${movie.Language}</li>
              <li class="list-group-item"><strong>Metascore:</strong> ${movie.Metascore}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-secondary">Go Back To Search</a>
          </div>
          </div>
      `;
      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    const searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});
