/* eslint-disable no-undef */

// When the form is submitted,
// capture the values for each of the inputs and append them to the DOM
// along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.

// For the Search Input field, when the form is submitted,
$('#search-form').on('submit', (eve) => {
  eve.preventDefault();
  const searchInput = $('#search-input').val();
  const searchUrl = `http://www.omdbapi.com/?s=${searchInput}&apikey=adf1f2d7`;
  $.ajax(searchUrl)
    .done((data) => {
      $('#search-input').val('');
      $('#movies-list').empty();
      data.Search.forEach((movie) => {
        const movieHtml = `
          <li class="list-inline-item">
            <img src="${movie.Poster}" alt="${movie.Title}" />
            <p>${movie.Title}</p>
            <p>${movie.Year}</p>
            <button class="btn btn-primary" data-imdbid="${movie.imdbID}">Add</button>
          </li>
        `;
        $('#movies-list').append(movieHtml);
      });
    })
    .fail((error) => {
      console.log('Error: ', error);
    });
});

$('#movie-form').on('submit', (eve) => {
  eve.preventDefault();
});
