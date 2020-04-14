$(function() {
  var $h1 = $("h1");
  var $zip = $("input[name='zip']");
  $("form").on("submit", function(event) {
    event.preventDefault();                 //Prevents the form from submitting normally
    var zipCode = $.trim($zip.val());
    $h1.text("Loading...");
    var request = $.ajax({                 // Sends an AJAX request
      url: "/" + zipCode,
      dataType: "json"
    });
    request.done(function(data) {          // When the request succeeds, update the header with the current temperature.
      var temperature = data.temperature;
      // &#176; is the HTML character code for the degree symbol.
      $h1.text("It is " + temperature + "º in " + zipCode + ".");
    });
    // If there’s an error, make sure that an error is shown.
    request.fail(function() {
      $h1.text("Error!");
    });
  });
});
