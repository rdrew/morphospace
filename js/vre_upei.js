(function ($) {

	Drupal.behaviors.test = {

		attach: function (context, settings) {

			$('.pager').addClass('uk-pagination');
			$('#tasks a').addClass('uk-button');
			$('input#edit-submit').addClass('uk-button');
		}

	};

	Drupal.behaviors.flipster = {

		attach: function (context, settings) {

			$('.collection_slideshow').flipster({
				style: 'carousel',
			spacing: -0.5,
			buttons: true,
			});

			$('.flat .collection_slideshow').flipster({

				style: 'flat',
				spacing: -0.25,
				loop: true,
				autoplay: 3000,

			});

			$('.home .collection_slideshow').flipster({
				style: 'carousel',
				loop: true,
				autoplay: 3000,
				spacing: -0.5,
				buttons: true,
			});

			$("#coverflow").flipster({
				style: 'carousel',
				spacing: -0.5,
				nav: true,
				buttons: true,
			});

		}

	};
	Drupal.behaviors.colorbox = {

		attach: function (context, settings) {

			$('.islandora-basic-image-content a').colorbox({maxWidth:"80%"});
		}

	};


	//$('.form-item-add-bookmarks select', context).once( function() {
	//$(this).hide();
	//});

})(jQuery);

