$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $preloader.delay(500).fadeOut('slow');
})

var hiscreen = document.getElementById('hiscreen');
var button1 = document.getElementById('button');

     button1.onclick = function() {
		document.getElementById('container').style.display = "block";
		hiscreen.style.display = "none";
	};