
// Use waypoints to swap the screen on the phone
$(function() {
	var waypoints = [
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
				var name = "scroll_" + $(this.element).attr('id');
				if(direction == "down") {
					$("#"+name).removeClass('scroll-screen-down');
					$("#"+name).prev().addClass('scroll-screen-up');
				} else {
					$("#"+name).prev().removeClass('scroll-screen-up');
					$("#"+name).addClass('scroll-screen-down');
				}
			},
			offset: 100 
		});
	}

    $('.learn-cta a.btn').on('click', function(e) {
        $(this).parent().siblings('.poster.lead').slideToggle('fast');
        $(this).hide();

    });
});

