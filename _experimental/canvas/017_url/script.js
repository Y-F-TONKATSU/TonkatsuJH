$(function(){
	
	$('#button').click(function(){
		window.history.pushState({}, 'unko', 'test/unko');
	});
	
	window.onpopstate = function(){
		$('#log').text('unko');
	};
	
});

