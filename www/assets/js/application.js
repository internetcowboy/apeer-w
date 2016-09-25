
// Use waypoints to swap the screen on the phone
var _cellMovement=0;
$(function() {
	var waypoints = [
		{ id : 'messaging', waypoint : {} },
		{ id: 'results', waypoint : {} },
		//{ id: 'accountability', waypoint : {} },
		{ id: 'security', waypoint : {} },
		{ id: 'ethics', waypoint : {} }
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
			offset: '50%'
		});
	}

});


$(function() {
	site.init();
});

var site = {
	init: function(){
		this.initfaq(location.hash);
		this.initdownload();
		this.initform();
        this.initToggles();
	},
    initToggles: function() {
        $('.btn').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('.info-wrap').find('.collapse');
            $collapse.collapse('toggle');
            $this.hide();
        });
    },
    initfaq: function(_hash) {
    	var self=this;
    	$(window).bind( 'hashchange', function(e) {
    		self.hashchange();
    	});
        $('.panel-group').unbind('click').bind('click',function(){
        	location.hash = $(this).attr('id');
        });
        if (_hash.indexOf("#")>-1){
    		var _el=_hash.split("#").join("");
    		$('#'+_el+' .panel-heading, #'+_el+' .panel-collapse').attr('aria-expanded','true').addClass('in');
    		setTimeout(function(){self.hashchange();},1);
    	}
    },
    hashchange: function() {
    	//due to fixed header
    	$(window).scrollTop($(window).scrollTop()-100);
    },
    initdownload: function(_hash) {
    	setTimeout(function(){$('#download').fadeIn(300);},1200);
        /*$('.android').unbind('click').bind('click',function(e){
        	e.preventDefault();
        	$('.blocker').fadeIn(300,function(){
        		$('#coming-soon').addClass('show');
        		setTimeout(function(){
        			$('#coming-soon').removeClass('show');
        			$('.blocker').fadeOut(300);
        		},2000);
        	});
        });*/
    },
    initform: function(_hash) {
        $('.btn-primary').unbind('click').bind('click',function(e){
        	e.preventDefault();
        	$('#home-form').addClass("hide");
        	var dataObj = {
        		"email": $('#email-address').val()
        	}
			$.post('https://api.apeer.co/api/user/contactform', dataObj, function(data) {
        		$('#thanks').addClass("show");
	        });
        });
    }
};