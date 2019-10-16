$(document).ready(function(){
	var imgItems = $('.cont_sldr li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	//for(i = 1; i <= imgItems; i++){
		//$('.cont_pag').append('<li><span class="icon-radio-unchecked"></span></li>');
	//} 

	$('.cont_sldr li').hide(); // Ocultanos todos los slides
	$('.cont_sldr li:first').show(); // Mostramos el primer slide
	$('.cont_pag li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	$('.cont_pag li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	setInterval(function(){
		nextSlider();
	}, 4000);

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.cont_sldr li').hide(); // Ocultamos todos los slides
		$('.cont_sldr li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado
		$('.cont_pag li').css({'color': '#858585'});// Dandole estilos a la paginacion seleccionada
		$(this).css({'color': '#CD6E2E'});
		imgPos = paginationPos;
	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.cont_pag li').css({'color': '#858585'});
		$('.cont_pag li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});
		$('.cont_sldr li').hide(); // Ocultamos todos los slides
		$('.cont_sldr li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.cont_pag li').css({'color': '#858585'});
		$('.cont_pag li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});
		$('.cont_sldr li').hide(); // Ocultamos todos los slides
		$('.cont_sldr li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}
});