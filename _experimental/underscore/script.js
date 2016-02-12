$(function(){
	
	_.delay(function(v){$("#log").text(v);}, 5000, 'unko');
	_.defer(function(){
		
		$("#log").text('2');

	});
	$("#log").text('1');
	
	var throttled = _.throttle(function(){$("#log").text($("#log").text() + "!");}, 1000);
	$("#log").click(throttled);
	
});

