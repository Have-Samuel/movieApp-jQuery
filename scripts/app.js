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

$(document).ready(() => {
  // Create an Event Listener for the form submission
  $('#searchForm').on('submit', (eve) => {
    const searchText = $('#searchText').val();
    getMovies(searchText);
    eve.preventDefault();
  });
});
