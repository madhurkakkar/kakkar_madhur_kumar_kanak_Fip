var $bottle = $('.bottle');

$bottle.on('mouseenter focus', function () {
	$bottle.get(0).play();
});

$bottle.on('mouseout blur', function () {
	$bottle.get(0).pause();
});


var $caseAnimation = $('.caseAnimation');

$caseAnimation.on('mouseenter focus', function () {
	$caseAnimation.get(0).play();
});

$caseAnimation.on('mouseout blur', function () {
	$caseAnimation.get(0).pause();
});