/* eslint-disable no-undef */
$(document).ready(() => {
  $('body').on('submit', '#searchForm', (eve) => {
    const searchText = $('#searchText').val();
    alert(searchText);
    eve.preventDefault();
  });
});