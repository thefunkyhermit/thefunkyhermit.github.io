/**
 * Drupal Single Sign On with LinkedIn Connect API.
 * 
 * Copyright (c) 2011 LinkedIn Corporation. All rights reserved.
 * @author Tan Nhu, tnhu@linkedin.com
 * @date 2011-06-07
 */
(function($, global){
	/*
	 * Define global IN_SSO module. 
	 */
	global.IN_SSO = {
		/**
		 * Open LinkedIn Sign In popup.
		 */
		signIn: function() {
			var width = 600,
				height = 400,
				left = (screen.width - width) / 2,
				top = (screen.height - height) / 2,
				params = 'width=' + width + ', height=' + height,
				inPopup,
				url = "https://" + window.location.hostname + "/in_sso/index";
			
			params += ', top=' + top + ', left=' + left;
			params += ', directories=no';
			params += ', location=no';
			params += ', menubar=no';
			params += ', resizable=no';
			params += ', scrollbars=no';
			params += ', status=no';
			params += ', toolbar=no';
			inPopup = window.open(url, 'in_signin_window', params);
			
			if (window.focus) {
				inPopup.focus()
			}
			return false;
		}			
	};
})(jQuery, this);;
/**
 * Drupal Search Page patches.
 * 
 * Copyright (c) 2011 LinkedIn Corporation. All rights reserved.
 * @author Tan Nhu, tnhu@linkedin.com
 * @date 2011-05-12
 */
(function($){
	/**
	 * Patch advanced search form. Language > Location, remove specific pages.
	 */
	function patchAdvancedSearch() {
		if ($("body.page-search").length) {
			$("#edit-type-page").parent().find("label").html(Drupal.t("Page"));
			$("#edit-type-press-news").parent().find("label").html(Drupal.t("News"));
			$("#edit-type-press-release").parent().find("label").html(Drupal.t("Releases"));
			
			$("#edit-type-press-news-page").parent().remove();
			$("#edit-type-success-stories-page").parent().remove();
			
			$("#edit-language").parent().find("> label").html(Drupal.t("Location"));		
			
			// Advanced search button
			$("#edit-advanced input.form-submit").removeClass("form-submit");
			
			// Translate Type labels
			$("#edit-type > div > label").each(function() {
				var th = $(this),
					text = $.trim(th.html());
				
				th.html(Drupal.t(text));
			});

			// Translate Location labels
			$("#edit-language > div > label").each(function() {
				var th = $(this),
					text = $.trim(th.html());
				
				th.html(Drupal.t(text));
			});
		}
	}
	
	$(document).ready(function(){
		patchAdvancedSearch();
	});	
	
})(jQuery);;
