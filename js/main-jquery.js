
$(document).ready(function () {
 
  $("#fadeBtn").click(function () {
    $("#fadeBox").fadeToggle();
  });


  $("#slideToggleBtn").click(function () {
    $("#slideBox").slideToggle();
  });

  $("#addTaskBtn").click(function () {
    $("#taskList").append("<li>New dynamic task</li>");
  });


  $("#hoverArea").hover(
    function () {
      $(this).css("background-color", "#fffae6");
    },
    function () {
      $(this).css("background-color", "white");
    }
  );
});
