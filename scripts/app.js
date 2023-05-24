/* eslint-disable no-undef */

// API Key
const apiKey = 'dd7c4785';

// passing data from one page to another
// function movieSelected(id) {
//   sessionStorage.setItem('movieId', id);
//   window.location = 'movie.html';
//   return false;
// }

// function getMovie() {
//   const movieId = sessionStorage.setItem('movieId');

//   $.ajax({
//     method: 'GET',
//     url: `${url}&i=${movieId}`,
//     success: (data) => {
//       (
//         console.log(data)
//       );

//       const movie = data;

//       const result = `
//         <div class="row">
//           <div class="col-md-4">
//             <img src="${movie.Poster}" class="thumbnail">
//           </div>
//             <div class="col-md-8">

//             </div>
//         </div>
//       `;

//       $('#movie').html(result);
//     },
//   });
// }

// When the form is submitted,
$(document).ready(() => {
  // Create an Event Listener for the form submission
  $('#searchForm').submit((eve) => {
    eve.preventDefault();

    const movies = $('#searchText').val();

    let result = '';

    const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

    // Make an AJAX request to the OMDB API
    $.ajax({
      method: 'GET',
      url: `${url}&s=${movies}`,
      success: (data) => {
        // console.log(data);
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
  });
  movieSelected(id);
});

// passing data from one page to another
function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie() {
  const movieId = sessionStorage.setItem('movieId', id);

  $.ajax({
    method: 'GET',
    url: `${url}&i=${movieId}`,
    success: (data) => {
      (
        console.log(data)
      );

      const movie = data;

      const result = `
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
            <div class="col-md-8">
              h2>${movie.Title}</h2>
              <ul class="list-group">
              li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              </ul>
            </div>
        </div>

        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-danger">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;

      $('#movie').html(result);
    },
  });
}

getMovie();