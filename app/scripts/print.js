$(".nav-tabs li a").each( function() {       
    $("#" + $(this).attr('data-toggle')).prepend("<h2 class='print-only'>" + $(this).text() + "</h2>");
});
