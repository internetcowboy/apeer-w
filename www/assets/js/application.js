
// Use waypoints to swap the screen on the phone
$(function() {
    var waypoints = [
        { id : 'lock', waypoint : {} },
        { id : 'assignment', waypoint : {} },
        { id: 'communication', waypoint : {} },
        { id: 'security', waypoint : {} },
        { id: 'appearance', waypoint : {} },
        
    ];

    for(var i=0; i < waypoints.length; i++) { 

        var waypoint_id = waypoints[i].id
        if(!document.getElementById(waypoint_id)) return;

        waypoints[i].waypoint = new Waypoint({
            element: document.getElementById(waypoint_id),
            handler: function(direction) {
                $(".scroll-screen img").removeClass('show');
                var name = "scroll_" + $(this.element).attr('id');
                $("#"+name+" img").addClass('show');
            },
            offset: 100 
        });
    }

    $('.learn-cta a.btn').on('click', function(e) {
        $(this).parent().siblings('.poster.lead').slideToggle(1);
        $(this).hide();

        $('html,body').animate({
           scrollTop: $(this).parent().siblings('.poster.lead').offset().top - $(this).parent().siblings('.poster.lead').outerHeight() - 250
        });
    });
});

