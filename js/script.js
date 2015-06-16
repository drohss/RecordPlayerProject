$(document).ready(function() {


// record slide left

$('.sleeve,.vinyl').click(function () {
    if($('.sleeve').is(':visible')){
    $('.sleeve').toggle('slide', {
    	direction: 'left'
    }, 500);
    }
    else{
        $('.sleeve').toggle('slide', {
            direction: 'left'
        }, 500, function(){ $('.sleeve').fadeIn();});
    }
});

	// $('.sleeve').click(function(){
	// 	$('.sleeve').toggle("slide");
	// });

	// $('.sleeve').mouseover(function(){
	// 	$('.sleeve')
	// });
// ----------



// Vinyl Snap To Player

 //    $('.vinyl').draggable( {
	// 	cursor: 'move',
	// 	snap: '.snapHere',
	// });

	$('.vinyl').draggable({
		snap: '.snapHere, .sleeve',
		snapMode:'inner',
		cursor: 'move'
	});

	$(function (){
		$('.vinyl').draggable();
		$('.snapHere').droppable({
			drop: function (event, ui) {
				$(ui.draggable).addClass('dropped');
			}
		});
	});

	$(function (){
		$('.vinyl').draggable();
		$('.record-1').droppable({
			drop: function (event, ui) {
				$(ui.draggable).removeClass('dropped');
			}
		});
	});


// -------------

/*	jQuery(document).on('click', '.droppable', function(){*/
	// jQuery('.vinyl').draggable({
	//     revert: false,
	//     start: function(event, ui) {
	//         ui.helper.data('dropped', false);
	//     },
	//     stop: function(event, ui)
	//     {
	//         /*alert('stop: dropped=' + ui.helper.data('asdasdas'));*/
	//         // Check value of ui.helper.data('dropped') and handle accordingly...
	//         $('.vinyl').addClass('putToBack');

	//     }
	// });

	// /*});*/
	
	// jQuery('.sleeve').droppable(
	// {
	//     accept: '.draggable',
	//     drop: function(event, ui)
	//     {
	//         ui.helper.data('dropped', true);
	//         // awesome code that works and handles successful drops...
	//         alert('yikes');
	//     }
	// });

// Arm Function
	// $('.arm').click(function(){
	// 	$('.arm').toggleClass('rotate');
	// });

// ------------------



// Switch On/Off

	$('.switch').on('click', function(){
		if ($('.switch').toggleClass('switch-on')){
			$('.switch').toggleClass('switch-off');
		}
	});

// ------------------



	// $(".arm").on('click', function(){
	//     $(".arm").toggleClass("play");
	// });


// audio loop crackle

	// $('.arm').click(function(){
	// 	myLoop = new Audio('audio/crackle-overlay.mp4');
	// 	myLoop.addEventListener('ended', function() {
	// 		this.currentTime = 0;
	// 		this.play();
	// 	}, false);
	// 	myLoop.play();
	// });

	// $('.arm').click(function(){
		myLoop = new Audio('audio/crackle-overlay.mp4');
		myLoop.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		}, false);
		myLoop.pause();
	// });

// ------------------


// 8bit Vinyl track (3second delay)

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio/pharrel-frontin.mp4');
audioElement.setAttribute('preload', 'auto');
// setTimeout(audioElement.play.bind(audioElement), 5000);
// audioElement.load()
$.get();
audioElement.addEventListener("load", function(){
	audioElement.play();
}, true);



// $('.arm').click(function(){
// 	setTimeout(function(){
// 		audioElement.play(3000);
// 	}, 3000);
// });










// --- Text Box Pop Up ---
	$(function(){
		$(".textPopup").dialog({
			closeText: "X"
		});
	});
// -----------------------




// ---------------


// --- record spin ---

	var switchState = 0;


	var $record = $('.spin'), degree = 0, timer;
	
	function rotate() {
		$record.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
		$record.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
		timer = setTimeout(function() {
			++degree; rotate();
		},10);
	}

// ------------------------------

    $(".switch-off").click(function(){

    	if(switchState === 0){
    		console.log('it was off, now on');
    		switchState = 1;
    		rotate();

    	} else if(switchState === 1){
    		console.log('it was on, now off');
    		switchState = 0;
    		clearTimeout(timer);

    	}


});

// Wrong Order Alert - Turn record player on

	$('.arm').on('click', function(){
			if ($('.switch').hasClass('switch-on')){
				$('.arm').toggleClass('rotate'),
				$('.arm').removeClass('stop');
			}
			else if ($('.switch').hasClass('switch-off')){
				$('.arm').removeClass('rotate'),
				$(".wrongSwitch").dialog({
					closeText: "X"
				});
			}
		});
	// $(function(){
	// 	$(".textPopup").dialog({
	// 		closeText: "X"
	// 	});
	// });
//  ----------------------------------------

	$('.arm').on('click', function(){
		if ($('.arm').hasClass('rotate')){
			$('.arm').toggleClass('play');
		}
		else if ($('.arm').removeClass('play')){
			$('.arm').toggleClass('stop');
		}
	});

	// -----------------
	$('.arm').click(function(){
		if ($('.arm').hasClass('play')){
		setTimeout(function(){
			audioElement.play(1500);
		}, 1500),
		myLoop.play();
		}
		else if ($('.arm').hasClass('stop')){
			myLoop.pause(),
			audioElement.pause();
		}
	});

	$('.switch').on('click', function(){
		if ($('.switch').hasClass('switch-off')){
			myLoop.pause(),
			audioElement.pause(),
			$('.arm').removeClass('rotate'),
			$('.arm').removeClass('play'),
			$('.arm').addClass('stop');
			}
	});


	$('.switch').on('click', function(){
		if(!($('.vinyl').hasClass('dropped'))){
			switchState = 0;
    		clearTimeout(timer);
			$('.switch').removeClass('switch-on'),
			$('.switch').addClass('switch-off'),
			$('.wrongVinyl').dialog({
				closeText: "X"
			});
		}
	});

	// $(function(){
	// 	if ($('.vinyl').hasClass('dropped')){
	// 		alert('woah there, make sure you turn the record player off first!');
	// 	}
	// });

	$('.record').on('mouseover', function(){
		$(this).toggleClass('bringtofront', function(){
			$(this).mouseout(function(){
				$(this).removeClass('bringtofront');
			});
		});
	});

	// $('.bringtofront').on('mouseover', function(){
	// 	$('.record').fadeIn("3000", function(){

	// 	});
	// });

	// $('.record').on('mouseout', function(){
	// 	$('record').removeClass('bringtofront');
	// })


}); // / ready