$(function(){

	// basic JS email masking
	var mbox = 'contact';
	var domain = 'iandundas.co.uk';
	$('.become-email').attr('href','mailto:'+mbox+'@'+domain).attr('title',mbox+'@'+domain);

	$('.tooltip')
		.qtip({
			style: {
					classes: 'qtip-bootstrap'
				},
			position: {
					my: 'bottom right',  // Position my top left...
					at: 'top center' // at the bottom right of...
				}
		});
});