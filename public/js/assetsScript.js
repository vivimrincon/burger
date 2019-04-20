$(document).ready(function() {
  //index.handlebars
  $(".devoured-class").on("submit",function(event) {
    event.preventDefault();

    let burgerID = $(".BurgersID").val();
    console.log(this);
    console.log(burgerID);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burgerID
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });
});