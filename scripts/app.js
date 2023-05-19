/* eslint-disable no-undef */

// API Key
const apiKey = 'dd7c4785';

// When the form is submitted,
$(document).ready(() => {
  // Create an Event Listener for the form submission
  $('#searchForm').submit((eve) => {
    eve.preventDefault();

    const movies = $('#searchText').val();

    // Declare our result variable
    let result = '';

    const url = `http://www.omdbapi.com/?sapikey=${apiKey}`;

    // Make an AJAX request to the OMDB API
    $.ajax({
      method: 'GET',
      url: `${url}&t=${movies}`,
      success: (data) => {
        console.log(data);

        result = `
          <img style="float:left" class="img-thumbnail" width="200" height="200" src=${data.Poster}/>
        `;
        $('#movies').html(result);
      },
    });
  });
});
