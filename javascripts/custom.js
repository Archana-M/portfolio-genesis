jQuery(document).ready(function(){

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=60){
			$("header").addClass('dark-brown-bg');
		}
		else
			if($("header").hasClass('dark-brown-bg')){
				$("header").removeClass('dark-brown-bg');
			}
	});

	$('#menu').slicknav({
		label:'',

	});





});