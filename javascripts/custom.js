jQuery(document).ready(function(){

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=100){
			$("header").addClass('black-bg');
		}
		else
			if($("header").hasClass('black-bg')){
				$("header").removeClass('black-bg');
			}
	});

	$('#menu').slicknav({
		label:'',

	});





});