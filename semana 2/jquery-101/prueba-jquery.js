$(document).ready(function () {
	$('#ver-mas').click(function() {
		$('.ocultable').toggle();
		var text = $(this).text();
		if(text == 'Ver más') {
			$(this).text('Ver menos');
		} 
		else {
			$(this).text('Ver más');
		}
	});

	$('h2').click(function(){
		$(this).next('p').toggle("slow");
	});
})