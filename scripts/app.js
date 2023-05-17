/* eslint-disable no-undef */
// Catch the submission of the form and send the data using AJAX

// getMovies Functiono
function getMovies(searchText) {
  // Make a request to the API Using Axios
  axios.get(`http://www.omdbapi.com/?apikey=thewdb&s=${searchText}`);
  // returns a promise
  then((response) => {
    console.log(response);
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
