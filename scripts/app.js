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

$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    const searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});
