// 14) jQuery and JS Frameworks

// Use $('#registerBtn').click(...) to handle click events
$('#registerBtn').click(function () {
  console.log('jQuery click: register');

  // Use .fadeOut() and .fadeIn() for event cards
  $('#eventCards .card').first().fadeOut(300, function () {
    $(this).fadeIn(300);
  });
});

