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

    const url = `http://www.omdbapi.com/?apikey=${apiKey}`;
    // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

    // Make an AJAX request to the OMDB API
    $.ajax({
      method: 'GET',
      url: `${url}&s=${movies}`,
      success: (data) => {
        console.log(data);
        const movies = data.Search;
        $.each(movies, (index, movie) => {
          result += `
            <div class="col-md-3">
              <div class="well text-center">
                <img src="${movie.Poster}">
                <h5>${movie.Title}</h5>
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-danger" href="#">Movie Details</a>
              </div>
            </div>
          `;
        });
        $('#movies').html(result);
      },
    });
    // axios.get(`http://www.omdbapi.com/?=tt3896198&apikey=${apiKey},${movies}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });
});
