// var data = null;
// var $j = jQuery.noConflict();
// $j(function() {
// 	$j.ajax(function())
// })
$(function() {
	
	var support = { animations : Modernizr.cssanimations },
	animEndEventNames = {
		'WebkitAnimation' : 'webkitAnimationEnd',
		'OAnimation' : 'oAnimationEnd',
		'msAnimation' : 'MSAnimationEnd',
		'animation' : 'animationend'
	},
	// animation end event name
	animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
	effectSel = document.getElementById( 'fxselect' ),
	component = document.getElementById( 'component' ),
	items = component.querySelector( 'ul.itemwrap' ).children,
	current = 0,
	itemsCount = items.length,
	nav = component.querySelector( 'nav' ),
	navNext = nav.querySelector( '.next' ),
	navPrev = nav.querySelector( '.prev' ),
	isAnimating = false;
	
	
function init() {
	toggleTab();
	hideNav();
	changeEffect();
	
	
	navNext.addEventListener( 'click', function( ev ) { ev.preventDefault(); navigate( 'next' ); } );
	navPrev.addEventListener( 'click', function( ev ) { ev.preventDefault(); navigate( 'prev' ); } );
	effectSel.addEventListener( 'change', changeEffect );
	
}

function next() {
	navigate( 'next' )
}

function hideNav() {
	nav.style.display = 'none';
}

function showNav() {
	nav.style.display = 'block';
}

function changeEffect() {
	component.className = component.className.replace(/\bfx.*?\b/g, '');
	if( effectSel.selectedIndex ) {
		classie.addClass( component, effectSel.options[ effectSel.selectedIndex ].value );
		showNav();
	}
	else {
		hideNav();
	}
}

function navigate( dir ) {
	if( isAnimating || !effectSel.selectedIndex ) return false;
	isAnimating = true;
	var cntAnims = 0;


	var currentItem = items[ current ];
	

	if( dir === 'next' ) {
		current = current < itemsCount - 1 ? current + 1 : 0;
	}
	else if( dir === 'prev' ) {
		current = current > 0 ? current - 1 : itemsCount - 1;
	}

	var nextItem = items[ current ];

	var onEndAnimationCurrentItem = function() {
		this.removeEventListener( animEndEventName, onEndAnimationCurrentItem );
		classie.removeClass( this, 'current' );
		classie.removeClass( this, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
		++cntAnims;
		if( cntAnims === 2 ) {
			isAnimating = false;
		}
	}

	var onEndAnimationNextItem = function() {
		this.removeEventListener( animEndEventName, onEndAnimationNextItem );
		classie.addClass( this, 'current' );
		classie.removeClass( this, dir === 'next' ? 'navInNext' : 'navInPrev' );
		++cntAnims;
		if( cntAnims === 2 ) {
			isAnimating = false;
		}
	}

	if( support.animations ) {
		currentItem.addEventListener( animEndEventName, onEndAnimationCurrentItem );
		nextItem.addEventListener( animEndEventName, onEndAnimationNextItem );
	}
	else {
		onEndAnimationCurrentItem();
		onEndAnimationNextItem();
	}

	classie.addClass( currentItem, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
	classie.addClass( nextItem, dir === 'next' ? 'navInNext' : 'navInPrev' );
}

function toggleTab() {
	book_tab.onclick = function(e) {
		var e = e||e.event;
		var target = e.target || e.srcElement;
		
		console.log()
	}
}

var som = setInterval(function() {
	navigate( 'next' )
},3000)

book_tab = document.querySelector('.book_tab');
$('.book_tab').click(function() {
	// debugger;
	clearInterval(som);
	setTimeout(function() {
		clearInterval(som);
		som = setInterval(function() {
			navigate( 'next' )
		},3000)
	},15000);
	var _index = $(this).index();
	$(this).parent().next().find('.book_cont').eq(_index).show().siblings().hide();
	$(this).addClass('active').siblings().removeClass('active');
})


	


init();
})
