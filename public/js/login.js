$(document).ready(function() {
  $("#travellers").on("click", function() {
    event.preventDefault();
    var travellerLogin = {
      username: $("#traveller-username")
        .val()
        .trim(),
      password: $("#traveller-password")
        .val()
        .trim()
    };

    $.post("/home", travellerLogin, function(data) {
      //   if (err) throw err;
      window.location.replace("/home");
    });
  });
  $("#locals").on("click", function() {
    event.preventDefault();
    var localLogin = {
      username: $("#local-username")
        .val()
        .trim(),
      password: $("#local-password")
        .val()
        .trim()
    };
    $.post("/home", localLogin, function(data) {
      //   if (err) throw err;
      window.location.replace("/home");
    });
  });

  module.exports = { traveller: travellerLogin, local: localLogin };
});
