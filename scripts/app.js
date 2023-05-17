/* eslint-disable no-undef */

// When the form is submitted,
// capture the values for each of the inputs and append them to the DOM
// along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.

$('form').on('submit', (ev) => {
  ev.preventDefault();
  const $title = $('#title').val();
  const $rating = $('#rating').val();
  const $newMovie = $(`<li>${$title} is rated ${$rating}</li>`);
  const $removeButton = $('<button>Remove</button>');
  $newMovie.append($removeButton);
  $('ul').append($newMovie);

  $removeButton.on('click', () => {
    $newMovie.remove();
  });

  $('form').trigger('reset');
});

// When the user clicks on the button to remove the movie,
// remove the movie from the DOM and the array of movies.
