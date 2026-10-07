/* Mobile menu toggle - shows/hides the navigation on small screens */
document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (button && nav) {
    button.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
});
