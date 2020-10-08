
// Image-Filter-Mixitup
$(document).ready(function(){
    var mixer = mixitup('.container');
});

// Sticky
$(".js--about-section").waypoint(function(direction){
    if(direction == "down"){
        $('nav').addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});

// Moblie-Menu
function openNav(){
    document.getElementById("myNav").style.width="100%"
}
function closeNav(){
    document.getElementById("myNav").style.width="0%"
}