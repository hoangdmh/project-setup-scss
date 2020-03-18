
var isActive = false;
$('.js-hamburger').on('click', function() {
	//alert('aaaaaaaaaa');
	if (isActive) {
		$(this).removeClass('show__menu');
		$('.js-menu').removeClass('active')
	} else {
		$(this).addClass('show__menu');
		$('.js-menu').addClass('active')
	}

	isActive = !isActive;
});