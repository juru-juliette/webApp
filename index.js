var day = new Array("sunday","monday","tuesday","wednesday","thursday","friday","saturday")
var today = new Date();
$("#submit").click( function(){
    var show = $("#birth").val();
  
    var birthday = new Date(show);
    $("div").text("Day of Your birth was " +  day[birthday.getDay()])
});