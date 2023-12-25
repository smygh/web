$(document).ready(function(){

//$("p").parent().css("color","red");
//$("p").parents().css("color","red");

//$("p").parentsUntil("div").css("color","red");


//$("div").children(".t").css("color","blue");

//$("div").find("span").css("color","red");




//$("h2").siblings().css("color","red");

//$("h2").next().css("color","red");
//$("h2").nextAll().css("color","red");
//$("h2").nextUntil("p").css("color","red");

//$("h3").prev().css("color","red");

//$("li").first().css("color","red");
//$("li").last().css("color","red");

//$("li").eq(2).css("color","blue");

//$("div").filter(".t").css("color","red");

//$("p").not(".txt").css("color","red");



$(".search").keyup(function(){
    let value=$(".search").val().toLowerCase();


    $("tbody tr").filter(function(){
        $(this).toggle( $(this).text().indexOf(value)>-1 );
    })
 
    
})














})