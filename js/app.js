document.addEventListener('DOMContentLoaded', function() {
  var input = document.querySelector('#input');
  var keycode = document.querySelector('#keycode');

  input.addEventListener('keydown', function(e) {
    keycode.value = e.keyCode;

    if (input.value.length) {
      input.value = '';
    }
  });

  keycode.addEventListener('click', function() {
    keycode.select();
  });
});
