/* eslint-disable no-undef */

// API Key
const apiKey = 'dd7c4785';

// When the form is submitted,
$(document).ready(() => {
  // Create an Event Listener for the form submission
  $('#searchForm').submit((eve) => {
    eve.preventDefault();

    const movie = $('#searchText').val();

    // Declare our result variable
    const result = '';

    const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

    // Make an AJAX request to the OMDB API
    $.ajax({
      method: 'GET',
      url: `${url}&t=${movie}`,
      success: (data) => {
        console.log(data);
      },
    });
  });
});
