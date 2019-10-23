
$(document).ready(function(){
    if ($("nav").width() < 1000) {
        $("button").click(function(){
        $("nav").toggle("slow");
    }); 
    }
});