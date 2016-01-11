$(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("h2").click(function() {
    alert("this is header 2")
  });

  $("p").dblclick(function() {
    alert("This is a paragraph.");
  });

  $("img").hover(function() {
    alert("This is an image.");
  });

  $("ul").hover(function() {
    alert("This is an unordered list.");
  });

});
