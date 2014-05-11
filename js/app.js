document.addEventListener('DOMContentLoaded', function() {
  var input = document.querySelector('#input');
  var keycode = document.querySelector('#keycode');

  input.addEventListener('keyup', function(e) {
    keycode.value = e.keyCode;
  });

  input.addEventListener('keydown', function(e) {
    if (input.value.length) {
      input.value = '';
    }
  });

  keycode.addEventListener('click', function() {
    keycode.select();
  });
});
