$(document).ready(function() {
  $("#comment-button").click(function(){
    $("#comment-list").append("<li class='list-item'>" + $("#new-comment").val() + "</li>");
    $("#new-comment").val("");
  })
})
