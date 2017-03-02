$(document).ready(function() {
  $.ajaxSetup({
    cache:false
  });
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand", function(json) {
      $(".message").append(json[0].content + "<p>&mdash; " + json[0].title + "</p>");
    });
  $("#getQuote").on("click", function() {
    $(".message").html("\"");
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand", function(json) {
      $(".message").append(json[0].content + "<p>&mdash; " + json[0].title + "</p>");
    });
  });
  $("#tweet").on("click", function() {
    window.location = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + $(".message").text();
  })
});