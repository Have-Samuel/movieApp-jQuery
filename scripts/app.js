/* eslint-disable no-undef */

// API Key
const apiKey = 'dd7c4785';

// When the form is submitted,
$(document).ready(() => {
  // Create an Event Listener for the form submission
  $('#searchForm').submit((eve) => {
    eve.preventDefault();

    const movie = $('#searchText').val();

    const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

    // Make an AJAX request to the OMDB API
    $.ajax({
      url: `${url}&t=${movie}`,
      method: 'GET',
      success(data) {
        console.log(data);
      },
    });
  });
});
