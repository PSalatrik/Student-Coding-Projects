$(document).ready(function(){

});

$(document).ready(function(){
	$("img").mouseenter(function(){
		$("img").fadeTo("fast", 0.5);
		});
	$("img").mouseleave(function(){
			$("img").fadeTo("fast", 1.0).blur();
		});


})
$(document).ready(function(){
	$("button").click(function(){
		$("div").fadeOut("slow");


	});
});

$(document).ready(function(){
	$("div").click(function(){
		$(this).fadeOut("slow");


	});
});
$(document).ready(function(){
	$("button").click(function(){
		$("#sweet").fadeIn("slow");


	});
});	

