/* eslint-disable no-undef */
// Catch the submission of the form and send the data using AJAX

// getMovies Functiono
function getMovies(searchText) {
  console.log(searchText);
}

$(document).ready(() => {
  // Create an Event Listener for the form submission
  $('#searchForm').on('submit', (eve) => {
    const searchText = $('#searchText').val();
    getMovies(searchText);
    eve.preventDefault();
  });
});
