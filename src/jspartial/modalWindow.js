export function modalWindow() {
  // Get the modal
  const modal = document.getElementById('myModal');

  // Get the button that opens the modal
  const btn = document.getElementById('myBtn');

  // Get the element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
  };

  // When the user clicks on (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Close modal when user presses Esc
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.code == 'ESCAPE') {
      modal.style.display = 'none';
    }
  };
}
