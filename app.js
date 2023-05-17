/* eslint-disable no-undef */

// When the form is submitted,
// capture the values for each of the inputs and append them to the DOM
// along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.

// When the form is submitted, capture the values for each of the inputs and append them to the DOM
$('form').on('submit', (event) => {
  event.preventDefault();
  const $title = $('#title').val();
  const $rating = $('#rating').val();
  const $newMovie = $(`
    <li>
      ${$title} is rated ${$rating}
      <button>Remove</button>
    </li>
  `);
  $('ul').append($newMovie);
});

// When the button to remove is clicked, remove each title and rating from the DOM.
$('ul').on('click', 'button', (event) => {
  $(event.target).parent().remove();
});
