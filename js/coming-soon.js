
$(document).ready(handleReady);

function handleReady() {
  console.log('Hello World');

  $('.fab fa-linkedin').on('click', handleLinkedIn);
  
}

function handleLinkedIn() {
  console.log('onclick');
  
}