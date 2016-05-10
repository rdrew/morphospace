(function ($) {

	Drupal.behaviors.test = {

		attach: function (context, settings) {

			$('.pager').addClass('uk-pagination');
			$('#tasks a').addClass('uk-button');
		}

	};

	//$('.form-item-add-bookmarks select', context).once( function() {
	//$(this).hide();
	//});

})(jQuery);

