$(document).ready(function(){

  console.log("Document is ready!");

  // when any 'p' tag is clicked, this function runs
  $("p").click(function(){
    console.log("p tag was pressed");
    $("img").hide(); // hide all 'img' tags
  });

  // when the tag with the id 'call-api' is clicked, this function runs
  $("#call-api").click(function(){
    console.log("call-api button was pressed");

    // call the API
    var url =https://github.com/njt618/chick_tech_api_workshop/blob/master/script.js; //
    $.get(url, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        console.log(data);
        $("img").attr("src",data.url);
      $("p").html(data.explanation);
      @("#explanation").html(data.explanation);
    });

  });

});
