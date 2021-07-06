		$(document).ready(function(){

			$('nav .button').click(function(){
				$('nav .button i').toggleClass('fa-times');
				$('nav .manu').fadeToggle();
			});
			$('#portfolio .web').click(function(){
				$('#portfolio .web-img').fadeIn();
				$('#portfolio .web span, #portfolio .web h2').css("color","#117A65")
			});

			$('#portfolio .shw-a .clo').click(function(){
				$('#portfolio .shw-a').fadeOut();
			});

			$('#portfolio .wrd').click(function(){
				$('#portfolio .wrd-img').fadeIn();
				$('#portfolio .wrd span, #portfolio .wrd h2').css("color","#117A65");
			});
			$('#portfolio .bns').click(function(){
				$('#portfolio .bns-img').fadeIn();
				$('#portfolio .bns span, #portfolio .bns h2').css("color","#117A65");
			});
			$('#portfolio .ety').click(function(){
				$('#portfolio .ety-img').fadeIn();
				$('#portfolio .ety span, #portfolio .ety h2').css("color","#117A65");
			});


			$('#portfolio .shw-a .clo').click(function(){
				$('#portfolio .web span, #portfolio .web h2').css("color", "#909090");
			});
			$('#portfolio .shw-a .clo').click(function(){
				$('#portfolio .wrd span, #portfolio .wrd h2').css("color", "#909090");
			});
			$('#portfolio .shw-a .clo').click(function(){
				$('#portfolio .bns span, #portfolio .bns h2').css("color", "#909090");
			});
			$('#portfolio .shw-a .clo').click(function(){
				$('#portfolio .ety span, #portfolio .ety h2').css("color", "#909090");
			});
		});